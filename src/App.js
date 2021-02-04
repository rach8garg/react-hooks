import {useState} from "react";
import './App.css';

function App({name}) {

  // array destructuring
  const [status, setStatus] = useState("Not Delivered");

  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Your package is : {status}</h2>
      <button onClick={() => setStatus("Delivered")}>Check Status</button>
    </div>
  );
}

export default App;
