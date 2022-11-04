import './App.css'
import { useControls } from 'leva'
import Brightness from './components/Brightness';
import Contrast from './components/Contrast';

function App() {
  const { 
    background, 
    frequency, 
    octaves, 
    brightness,
    contrast,
    opacity
  } = useControls({ 
    background: '#131516', 
    frequency: { value: 0.8, min: 0.1, max: 2 }, 
    octaves: 4,
    brightness: { value: 0.7, min: 0, max: 3},
    contrast: { value: 0.3, min: 0, max: 3},
    opacity: { value: 0.25, min: 0, max: 1},
  });

  return (
    <div className="App" style={{ backgroundColor: background }}>
      <svg id="noice">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency={frequency} numOctaves={octaves} stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
          <Brightness brightness={brightness} alpha={opacity} />
          <Contrast contrast={contrast} />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
      </svg>
    </div>
  )
}

export default App
