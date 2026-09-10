import FaultyTerminal from "./components/FaultyTerminal"
import TextType from './components/TextType';

function App() {

  return (
  <>
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        pointerEvents: "none",
      }}
    >
      <TextType
        style={{ color: "white" }}
        text={["Andrew Meechan", "Software Engineer"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        deletingSpeed={50}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={0.5}
      />
    </div>

    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        inset: 0,
      }}
    >
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
