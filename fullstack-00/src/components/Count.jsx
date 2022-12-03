import React, { useState } from "react";

const Count = (props) => {
    //let numero = 0; 
    const [numero, setNumero] = useState(0);
    const suma = ()=>{
        setNumero(numero + 1);
        //numero += 1 ; //numero = numero + 1;
        console.log(numero);
    };
    const resta = ()=>{
        setNumero(numero - 1);
        //numero -= 1 ; //numero = numero + 1;
        console.log(numero);
    };
    return (
        <>
            <div>
                {props.hola? <p>{props.hola+''}</p>:null}
                <h1>count: {numero}</h1>
                <button onClick={resta}>RESTA</button>
                <button onClick={suma}>SUMA</button>
            </div>
        </>
    )
};

export default Count;