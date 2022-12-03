import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectorRoute = ({children}) => {
    const isAuth = true;

    if(!isAuth){
        return <Navigate to='/'/>
    }

  return (
    <>{ children }</>
  )
}

export default ProtectorRoute;