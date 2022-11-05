import './styles/App.css';
import './styles/prism-theme.css';
import { useControls } from 'leva';
import Content from './components/Content';
import { getSVG } from './svg';

function App() {
  const { 
    background, 
    frequency, 
    octaves,
    brightness,
    contrast,
    opacity
  } = useControls({ 
    background: '#fc3c3c', 
    frequency: { value: 0.8, min: 1.34, max: 2 }, 
    octaves: 4,
    brightness: { value: 0.46, min: 0, max: 3},
    contrast: { value: 1.47, min: 0, max: 3},
    opacity: { value: 0.56, min: 0, max: 1},
  }, {
    drag: false,
  });

  const backgroundSvgString = getSVG({ 
    frequency: parseFloat(frequency.toFixed(2)),
    octaves,
    brightness: parseFloat(brightness.toFixed(2)),
    contrast: parseFloat(contrast.toFixed(2)),
    alpha: parseFloat(opacity.toFixed(2)),
  });

  return (
    <div className="relative w-full min-h-full h-fit p-6 bg-[#141516]">
      <Content backgroundSvgString={backgroundSvgString} background={background} />
      <svg className='fixed top-0 left-0 w-full h-full pointer-events-none'>
          <filter id="noise-filter-bg">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
              <feComponentTransfer>
                  <feFuncR type="linear" slope="0.7"></feFuncR>
                  <feFuncG type="linear" slope="0.7"></feFuncG>
                  <feFuncB type="linear" slope="0.7"></feFuncB>
                  <feFuncA type="linear" slope="0.25"></feFuncA>
              </feComponentTransfer>
              <feComponentTransfer>
                  <feFuncR type="linear" slope="0.3" intercept="0.35"></feFuncR>
                  <feFuncG type="linear" slope="0.3" intercept="0.35"></feFuncG>
                  <feFuncB type="linear" slope="0.3" intercept="0.35"></feFuncB>
              </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-filter-bg)"></rect>
      </svg>
      {/* <div dangerouslySetInnerHTML={{ __html: backgroundSvgString }} /> */}
    </div>
  )
}

export default App
