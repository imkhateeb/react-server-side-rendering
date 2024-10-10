import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Page | React SSR</title>
        <meta name="description" content="This is our about page" />
      </Helmet>
      <h1>About</h1>
    </div>
  );
};

export default About;
