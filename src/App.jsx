import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{height: '98vh', width: '99vw'}}>

        {/* text */}
        {/* <Spline scene="https://prod.spline.design/CLkLqn4E1UCNFSce/scene.splinecode" /> */}

        {/* adilanet */}
        <Spline
        scene="https://prod.spline.design/oQs2X0o9m8axKz9c/scene.splinecode" 
      />
        
      </div>
    </>
  )
}

export default App
