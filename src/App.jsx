import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Count from './Count'

function App() {
 
  return (
    <>
    {
      [1, 2, 3].map((item) => <Count key={item} init={item} end={5+item} />) 
    }
     
    </>
  )
}

export default App
