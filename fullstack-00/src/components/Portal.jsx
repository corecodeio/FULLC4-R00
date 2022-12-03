import React,{useEffect} from 'react'
import ReactDOM from 'react-dom';
import Styles from './Portal.module.css';

const Portal = ({ element, close, activo }) => {
    const closePortal= ()=>{
        close(false);
    }
    useEffect(()=>{
        console.log('abrir portal')
        return ()=>{
            console.log('portal cerrado')
        }
    },[]);
    return activo ? ReactDOM.createPortal(
        <div className={Styles[`container`]}>
            <button onClick={closePortal}>X</button>
            {element}
            </div>,document.getElementById('modal')
    ):null
}

export default Portal