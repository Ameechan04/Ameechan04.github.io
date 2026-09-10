import FaultyTerminal from "./components/FaultyTerminal"

function App() {

  return (
    <>
      <div style={{ width: '100vw', height:'100vh', position: 'relative' }}>
        <FaultyTerminal
          scale={1.6}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.3}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#ffffff"
          mouseReact
          mouseStrength={0.8}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>
    </>
  )
}

export default App
