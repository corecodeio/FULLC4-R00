import { createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const contextData = 15;

  return (
    <DataContext.Provider value={contextData}>
      {props.children}
    </DataContext.Provider>
  );
};
