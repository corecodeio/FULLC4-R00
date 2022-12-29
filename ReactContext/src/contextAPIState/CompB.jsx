import React, { useContext } from "react";
import CompC from "./CompC";
import { DataContext } from "../contexts/DataContextState";

const CompB = () => {
  const { contextData } = useContext(DataContext);
  return (
    <div>
      <h3>Component B</h3>
      <p>Data: {contextData}</p>
      <p>&#8595;</p>
      <CompC />
    </div>
  );
};

export default CompB;
