import { useState } from "react";
import { Helmet } from "react-helmet";

const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <Helmet>
        <title>Counter Page | React SSR</title>
        <meta name="description" content="This is our counter page" />
      </Helmet>

      <div>
        <button onClick={() => setcount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setcount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
