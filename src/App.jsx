import { useState } from "react";
import "./App.css"
const App = () =>{
  const [count, setCount] = useState(0);
  const incrementa = () => {setCount(count +1)};
  const decrementa = () => {setCount(count - 1)};
  const resetear = () => {setCount(0)};
  return (
    <div className="container">
      <h1>Counter : {count}</h1>
      <hr></hr>
      <button onClick={incrementa}>+</button>
      <button onClick={resetear}>Reset</button>
      <button onClick={decrementa}>-</button>
    </div>
  );
}

export default App;



