import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>About Page | React SSR</title>
        <meta
          name="description"
          content="This is our about page where you can learn more about our React SSR project."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Page | React SSR" />
        <meta
          property="og:description"
          content="This is our about page where you can learn more about our React SSR project."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/static/images/about-og-image.jpg"
        />
        <meta property="og:site_name" content="React SSR Demo" />

        {/* Twitter Card Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Page | React SSR" />
        <meta
          name="twitter:description"
          content="This is our about page where you can learn more about our React SSR project."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/static/images/about-og-image.jpg"
        />
      </Helmet>

      <h1>About</h1>
      <p>This is the About page of our React SSR demo application.</p>
    </div>
  );
};

export default About;
