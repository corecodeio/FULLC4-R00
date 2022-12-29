import React from "react";
import CompC from "./CompC";

const CompB = ({ data }) => {
  return (
    <div>
      <h3>Component B</h3>
      <p>&#8595;</p>
      <CompC data={data} />
    </div>
  );
};

export default CompB;
