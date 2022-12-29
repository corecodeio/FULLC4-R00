import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const CompE = () => {
  const contextData = useContext(DataContext);
  return (
    <div>
      <h3>Component E</h3>
      <p>Data: {contextData}</p>
    </div>
  );
};

export default CompE;
