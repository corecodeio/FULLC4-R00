import { createStore } from "redux";

const reducer = (state = { contador: 0 }, action) => {
  if (action.type === "INCREMENT") {
    console.log(action);
    //Aqui podemos hacer lo que queramos, por ejemplo, guardar el valor en local storage
    return { contador: state.contador + 1 };
  }

  if (action.type === "DECREMENT") {
    return { contador: state.contador - 1 };
  }

  if (action.type === "ADDX") {
    return { contador: state.contador + action.payload };
  }

  return state;
};

const store = createStore(reducer);
export default store;
