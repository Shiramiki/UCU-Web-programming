// import logo from './logo.svg';
import "./App.css";
import {useState} from 'react'

// COMPONENT
function Square({ value }) {
  const[name, setName]=useState(null);

  function handleButtonClick(){
    setName("X")
    console.log("Click action", value);
  }
  return <button className="square" onClick ={handleButtonClick}> {value}
  {name}
  </button>;
}
function App() {
  return (
    <div>
      <div className="boardRow">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>

      <div className="boardRow">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>

      <div className="boardRow">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>
    </div>
  );
}

export default App;
