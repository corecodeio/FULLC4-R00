import React from "react";
import { useParams } from "react-router-dom";

const Libro = () => {
  const { id } = useParams();

  return <div>Libro {id}</div>;
};

export default Libro;
