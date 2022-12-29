import React from 'react';
import ReactDOM from 'react-dom/client';
// import CompA from "./propdrilling/CompA";
// import CompA from './contextAPI/CompA'
import CompA from './contextAPIState/CompA'
// import { DataContextProvider } from "./contexts/DataContext";
import { DataContextProvider } from './contexts/DataContextState';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider data={0}>
      <CompA />
    </DataContextProvider>
  </React.StrictMode>
);
