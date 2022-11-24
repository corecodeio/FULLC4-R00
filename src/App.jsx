import React, { useState } from 'react';
import Count from './components/Count';
import Button from './components/Button';

function App() {
  //const [num, setNum] = useState(0);
  const [num, setNum] = useState({
    numero:0
  });
  /*
  let objeto = {
    a:'abc',
    b:'dfg'
  }
  objeto = {...objeto, b:'1234'}
  */
  //let numero = 1;
  const suma = ()=>{
    setNum({...num, numero:num.numero+1});
    //setNum(num + 1);
    console.log(num.numero);
  }
  const resta = ()=>{
    setNum({...num, numero:num.numero-1});
    //setNum(num - 1);
    console.log(num.numero);
  }
  return (
    <div>
      <Count num={num.numero}/>
      <Button name="SUMA" action={suma}/>
      <Button name="RESTAR" action={resta}/>
    </div>
  );
}

export default App;
