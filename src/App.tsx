import './App.css'
import { useControls } from 'leva'

function App() {
  const { 
    Frequency, 
    Background, 
    Octaves, 
    Brightness,
    Contrast,
    Opacity
  } = useControls({ 
    Background: '#131516', 
    Frequency: { value: 0.8, min: 0.1, max: 2 }, 
    Octaves: 4,
    Brightness: { value: 0.7, min: 0, max: 3},
    Contrast: { value: 0.3, min: 0, max: 3},
    Opacity: { value: 0.25, min: 0, max: 1},
  });

  return (
    <div className="App" style={{ backgroundColor: Background }}>
      <svg id="noice">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency={Frequency} numOctaves={Octaves} stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
          <feComponentTransfer>
            <feFuncR type="linear" slope={Brightness}></feFuncR>
            <feFuncG type="linear" slope={Brightness}></feFuncG>
            <feFuncB type="linear" slope={Brightness}></feFuncB>
            <feFuncA type="linear" slope={Opacity}></feFuncA>
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type="linear" slope={Contrast} intercept={`${-(0.5 * Contrast) + 0.5}`}/>
            <feFuncG type="linear" slope={Contrast} intercept={`${-(0.5 * Contrast) + 0.5}`}/>
            <feFuncB type="linear" slope={Contrast} intercept={`${-(0.5 * Contrast) + 0.5}`}/>
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
      </svg>
    </div>
  )
}

export default App
