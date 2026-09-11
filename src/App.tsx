import FaultyTerminal from "./components/FaultyTerminal"
import TextType from "./components/TextType"
import Dock from "./components/Dock"
import { motion } from "motion/react"
import andrewIcon from "./assets/icons/andrewIcon.svg"
import educationIcon from "./assets/icons/educationIcon.svg"
import computerIcon from "./assets/icons/computerIcon.svg"
import officeIcon from "./assets/icons/officeIcon.svg"

function App() {
  const items = [
    {
      icon: (
        <img
          src={andrewIcon}
          alt=""
          style={{ width: 60, height: 60 }}
        />
      ),
      label: "About Me",
      onClick: () => alert("Home!"),
    },
    {
     icon: (
        <img
          src={computerIcon}
          alt=""
          style={{ width: 50, height: 50 }}
        />
      ),
      label: "Projects",
      onClick: () => alert("Profile!"),
    },
     {
      icon: (
        <img
          src={educationIcon}
          alt=""
          style={{ width: 60, height: 60 }}
        />
      ),
      label: "Education",
      onClick: () => alert("Archive!"),
    },
    {
      icon: (
        <img
          src={officeIcon}
          alt=""
          style={{ width: 60, height: 60 }}
        />
      ),
      label: "Work Experience",
      onClick: () => alert("Work Experience!"),
    },
  ]

  return (
    <>
      {/* Text + Dock overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <TextType
          style={{
            color: "white",
            fontSize: "10vh",
          }}
          text={["Andrew Meechan", "Software Engineer"]}
          typingSpeed={100}
          pauseDuration={1700}
          showCursor
          cursorCharacter="_"
          deletingSpeed={75}
          cursorBlinkDuration={0.5}
        />

        {/* Dock */}
       <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,    // waits 1500ms
            duration: 1.5, // fade/slide duration
            ease: "easeOut",
          }}
          style={{
            marginTop: "40px",
            pointerEvents: "auto",
            color: "white",
          }}
        >
          <Dock
            items={items}
            panelHeight={150}
            baseItemSize={100}
            magnification={140}
          />
        </motion.div>
      </div>

      {/* Background */}
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