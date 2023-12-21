import HeroBanner from "./components/HeroBanner"
import Cursor from "./components/sub-components/Cursor";
import { useState } from 'react';

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enter, setEnter] = useState(false)

  const mouseOver = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <main className="relative" onMouseMove={(e) => mouseOver(e)} onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} style={{ cursor: "none", overflow: "hidden" }}>
      <Cursor position={position} enter={enter} />
      <HeroBanner />
    </main>
  )
}

export default App
