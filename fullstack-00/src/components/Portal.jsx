import React,{useEffect} from 'react'
import ReactDOM from 'react-dom';
import Styles from './Portal.module.css';

const Portal = ({ children, close }) => {
    const closePortal= ()=>{
        close(false);
    }
    useEffect(()=>{
        console.log('abrir portal')
        return ()=>{
            console.log('portal cerrado')
        }
    },[]);
    return ReactDOM.createPortal(
        <div className={Styles.container}>
            <button onClick={closePortal}>X</button>
            {children}
            </div>,document.getElementById('modal')
    )
}

export default Portal