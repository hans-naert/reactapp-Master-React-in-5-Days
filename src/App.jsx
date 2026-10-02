import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Count from './Count'

function App() {

  const [total, setTotal] = useState(0);
 
  return (
    <>
    {
      [1, 2, 3].map((item) => <Count key={item} setTotal={setTotal} init={item} end={5+item} autostart={item<2?true:false} />) 
   }
    <div>Total: {total}</div>  
    </>
  )
}

export default App
