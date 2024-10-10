import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Counter from "./components/Counter";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/counter"}>Counter</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default App;
