import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page | React SSR</title>
        <meta name="description" content="This is our home page" />
      </Helmet>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
