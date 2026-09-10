import FaultyTerminal from "./components/FaultyTerminal"
import TextType from './components/TextType';
import Dock from './components/Dock';



function App() {

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];


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
        style={{ color: "white", fontSize: "10vh"}}
        text={["Andrew Meechan", "Software Engineer"]}
        typingSpeed={100}
        pauseDuration={1700}
        showCursor
        cursorCharacter="_"
        deletingSpeed={75}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={0.5}
      />
    </div>

     <Dock
      items={items}
      panelHeight={150}
      baseItemSize={60}
      magnification={100}
    />

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
        mouseStrength={0.3}
        pageLoadAnimation
        brightness={0.7}
      />
    </div>
  </>
)
}

export default App
