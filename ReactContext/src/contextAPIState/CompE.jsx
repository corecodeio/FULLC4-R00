import React from "react";
import { useDataContext } from "../contexts/DataContextState";

const CompE = () => {
  const { contextData, setContextData } = useDataContext();
  return (
    <div>
      <h3>Component E</h3>
      <p>Data: {contextData}</p>
      <button onClick={() => setContextData(contextData + 1)}>Sumar 1</button>
    </div>
  );
};

export default CompE;
