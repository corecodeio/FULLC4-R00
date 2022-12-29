import React from "react";
import CompE from "./CompE";

const CompD = ({ data }) => {
  return (
    <div>
      <h3>Component D</h3>
      <p>&#8595;</p>
      <CompE data={data} />
    </div>
  );
};

export default CompD;
