import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const CountIncrease = () => {
    setCount(count+1);
  } 

  const CountDecrease = () => {
    setCount (count-1);
  }

  return (
    <div className="count">
      <button onClick={CountDecrease} >Decrease  </button>
      <button onClick={CountIncrease}>Increase the value</button>
      <p>Count is : {count}</p>
    </div>
  );
}

export default App;
/*<button onClick={CountDecrease} >Decrease {count} </button>
      <button onClick={CountIncrease}>Increase {count}</button> */