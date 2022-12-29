import React from "react";
import { Link } from "react-router-dom";

const Biblioteca = () => {
  return (
    <>
      <h1>Biblioteca</h1>
      <Link to="/libros/1">Libro 1</Link>
      <br />
      <Link to="/libros/2">Libro 2</Link>
      <br />
      <Link to="/libros/nuevo">Crear Libro Nuevo</Link>
    </>
  );
};

export default Biblioteca;
