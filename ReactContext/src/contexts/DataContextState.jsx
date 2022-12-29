import { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [contextData, setContextData] = useState(10);

  return (
    <DataContext.Provider
      value={{
        contextData,
        setContextData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};
