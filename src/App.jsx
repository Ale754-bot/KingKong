import { useState } from 'react'
import './App.css'
import Orb from './Orb';
import TrueFocus from './TrueFocus';
import KingKongGame from './KingKongGame.jsx';




function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
  <Orb
    hoverIntensity={0.10}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>
<TrueFocus 
sentence="King Kong"
manualMode={false}
blurAmount={5}
borderColor="skyblue"
animationDuration={2}
pauseBetweenAnimations={1}
/> 
<div>
      <h1>¡Jugemos!</h1>
      <KingKongGame />

    </div>

    </>
    
  )
}


export default App


