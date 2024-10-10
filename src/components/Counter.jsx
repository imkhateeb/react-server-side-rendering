import { useState } from "react";
import { Helmet } from "react-helmet";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>Counter Page | React SSR</title>
        <meta
          name="description"
          content="This is our counter page where you can increment or decrement a counter."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Counter Page | React SSR" />
        <meta
          property="og:description"
          content="This is our counter page where you can increment or decrement a counter."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/counter" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/static/images/counter-og-image.jpg"
        />
        <meta property="og:site_name" content="React SSR Demo" />

        {/* Twitter Card Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Counter Page | React SSR" />
        <meta
          name="twitter:description"
          content="This is our counter page where you can increment or decrement a counter."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/static/images/counter-og-image.jpg"
        />
      </Helmet>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
