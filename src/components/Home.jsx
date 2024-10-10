import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>Home Page | React SSR</title>
        <meta name="description" content="This is our home page" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Home Page | React SSR" />
        <meta
          property="og:description"
          content="This is our home page where you can find more about our React SSR application."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/home" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/static/images/home-og-image.jpg"
        />
        <meta property="og:site_name" content="React SSR Demo" />

        {/* Twitter Card Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page | React SSR" />
        <meta
          name="twitter:description"
          content="This is our home page where you can find more about our React SSR application."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/static/images/home-og-image.jpg"
        />
      </Helmet>

      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
