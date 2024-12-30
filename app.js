import React from "react";
import ReactDOM from "react-dom/client";

// JSX is not a part of react
// JSX - It is not HTML in JS but HTML or XML like syntax. JSX gets transpiled by parcel using Babel (JS compiler) before it reaches the JS engine
// JSX => React.createElement => ReactElement (JS object) => HTMLElement (rendered)
const jsxHeading = <h1>This is JSX</h1>;

// React functional component
const HeadingComponent = () => (
  <div>
    <h1>This is a react component</h1>
    {jsxHeading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
