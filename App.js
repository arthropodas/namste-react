import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>this is the Title</h1>;


const HeadingComponent = () => (
  <div>
    <h1>this is the HeadingComponent</h1>
    <h1>
    <span>
      title content
    </span>
    <span>
      {Title()}
    </span>
    </h1>

    <Title />
  </div>
);
// console.log("content in the JSX parent", jsxParent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
