import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  const addValue = ()=>{
    if(counter+1 > 20){
      alert("Limit exceed");
    }else{
      setCounter(counter => counter+1);
      setCounter(counter => counter+1);
      setCounter(counter => counter+1);
      setCounter(counter => counter+1);
    }
  }

  const removeValue = ()=>{
    if(counter-1 < 0){
      alert("value cannot be negative");
    }else{
      counter-=1;
      setCounter(counter);
      console.log("clicked",counter);
    }
  }
  return (
    <>
      <h1>chai aur React !</h1>
      <h2>counter value: {counter}</h2>
      
      <button onClick={addValue}>add value</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
