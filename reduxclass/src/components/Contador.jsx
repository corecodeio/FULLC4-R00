import { useSelector, useDispatch } from "react-redux";

const Contador = () => {
  const conteo = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addTen = () => {
    dispatch({ type: "ADDX", payload: 10 });
  };

  return (
    <div>
      <h1>Contador</h1>
      <h2>{conteo}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addTen}>Add 10</button>
    </div>
  );
};
export default Contador;
