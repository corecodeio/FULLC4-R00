import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Biblioteca from "./pages/Biblioteca";
import Libro from "./pages/Libro";
import LibroNuevo from "./pages/LibroNuevo";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/jsx">JSX</Link>
          </li>
          <li>
            <Link to="/libros">Libros</Link>
          </li>
        </ul>
      </nav>
      <Routes></Routes>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/jsx" element={<h2>Hola desde routes!</h2>} />

        {/* Nesting */}
        <Route path="/libros">
          <Route index element={<Biblioteca />} />
          <Route path=":id" element={<Libro />} />
          <Route path="nuevo" element={<LibroNuevo />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
