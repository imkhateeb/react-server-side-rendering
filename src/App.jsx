import { Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/about">Go to About</Link>
  </div>
);
const About = () => (
  <div>
    <h1>About Page</h1>
    <Link to="/">Go to Home</Link>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
