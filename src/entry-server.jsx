import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet"; // Import Helmet for handling meta tags
import { StaticRouter } from "react-router-dom/server";
import App from "./App"; // Your main App component

// Function to handle the server-side rendering
export function render(req, res) {
  const context = {}; // You can pass this to track redirects or errors in StaticRouter

  // Render the App component to a string, using StaticRouter for SSR
  const appHtml = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // Use Helmet to extract the meta tags set in the components
  const helmet = Helmet.renderStatic();

  // Construct the final HTML with dynamic meta tags and App content
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${helmet.title.toString()}  <!-- Inject Helmet's dynamic title -->
      ${helmet.meta.toString()}   <!-- Inject Helmet's dynamic meta tags -->
      ${helmet.link.toString()}   <!-- Inject Helmet's dynamic links (if any) -->
    </head>
    <body>
      <div id="root">${appHtml}</div> <!-- Inject the App HTML -->
      <script src="/src/entry-client.jsx"></script> <!-- Add your client-side JS -->
    </body>
    </html>
  `;

  // Send the complete HTML response with status 200
  return html;
}
