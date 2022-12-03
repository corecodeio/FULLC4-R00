import React from 'react'
import { Outlet } from 'react-router-dom';

const SubRutas = () => {
  return (
    <div>
        <h1>Sub Rutas1</h1>
        <Outlet/>
    </div>
  )
}

export default SubRutas