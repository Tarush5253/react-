import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name:'chai',
    age:76,
  }
  let arr = [
    1,2,3
  ]


  return (
    <>
      <h1 className='bg-green-500 rounded-xl p-5 font-bold'>chai aur react</h1>
      <br />
      <Card username='herry' btntext = 'visit me'/>
      <br />
      <Card username='tarush'  />
    </>
  )
}

export default App
