import React from 'react';
import ReactDOM from "react-dom/client";

// Inline CSS
// import Component1 from "./inline/Component1";
// import Component2 from "./inline/Component2";

// CSS Regular
// import Component1 from "./regular/Component1";
// import Component2 from "./regular/Component2";

// CSS in JS
// import Component1 from "./cssinjs/Component1";
// import Component2 from "./cssinjs/Component2";

// Modules
// import Component1 from "./modules/Component1";
// import Component2 from "./modules/Component2";

//SASS (Preprocesador)
// import Component1 from "./sass/Component1";
// import Component2 from "./sass/Component2";

//Tailwind
// import "./input.css";
// import Component1 from "./tailwind/Component1";
// import Component2 from "./tailwind/Component2";

//React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Component2 from "./bootstrap/Component2";
import Component1 from "./bootstrap/Component1";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Component1 />
    <Component2 />
  </React.StrictMode>
);
