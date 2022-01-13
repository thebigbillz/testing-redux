import "./App.css";
import { useSelector } from "react-redux";
import boundActions from "./Actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { increment, decrement, reset } = boundActions(dispatch);

  const count = useSelector((state) => state.counter);
  console.log(count);

  const add = () => {
    increment(5);
  };

  const minus = () => {
    decrement(3);
  };

  const resetCount = () => {
    reset();
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
