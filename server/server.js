import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs"; // Correct import for SSR
import { readFile } from "fs/promises";
import path from "path";

// Handle dynamic imports for Vite in ESM
const __dirname = path.resolve();
const isProduction = process.env.NODE_ENV === "production";

const createServer = async () => {
  const app = express();

  let viteServer;
  if (!isProduction) {
    const vite = await import("vite"); // Dynamically import Vite
    viteServer = await vite.createServer({
      server: { middlewareMode: "ssr" },
      appType: "custom",
    });

    // Use Vite's connect instance as middleware
    app.use(viteServer.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
  }

  app.get("*", async (req, res) => {
    try {
      let template, render;
      if (!isProduction) {
        // Use Vite to load modules in development mode
        template = await viteServer.transformIndexHtml(
          req.url,
          await readFile(path.resolve(__dirname, "index.html"), "utf-8")
        );
        render = (await viteServer.ssrLoadModule("/src/entry-server.jsx"))
          .render;
      } else {
        template = await readFile(
          path.resolve(__dirname, "dist/index.html"),
          "utf-8"
        );
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const appHtml = render(req.url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (err) {
      if (!isProduction) viteServer.ssrFixStacktrace(err);
      console.error(err);
      res.status(500).end(err.stack);
    }
  });

  return app;
};

createServer().then((app) => {
  app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
  });
});
