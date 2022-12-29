import React from "react";
import CompB from "./CompB";

const CompA = () => {
  const data = "Hola Mundo!";
  return (
    <div>
      <h3>Component A</h3>
      <p>&#8595;</p>
      <CompB data={data} />
    </div>
  );
};

export default CompA;
