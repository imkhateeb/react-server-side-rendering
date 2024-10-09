import pkg from "react-helmet-async";
const { Helmet } = pkg;

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - My React App</title>
        <meta
          name="description"
          content="Welcome to the homepage of my awesome React app!"
        />
        <meta property="og:title" content="Home - My React App" />
        <meta
          property="og:description"
          content="This is a description for social media sharing"
        />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />
      </Helmet>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
