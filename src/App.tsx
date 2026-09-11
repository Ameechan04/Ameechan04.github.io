import FaultyTerminal from "./components/FaultyTerminal"
import TextType from "./components/TextType"
import Dock from "./components/Dock"
import { motion } from "motion/react"
import andrewIcon from "./assets/icons/andrewIcon.svg"
import educationIcon from "./assets/icons/educationIcon.svg"
import computerIcon from "./assets/icons/computerIcon.svg"
import officeIcon from "./assets/icons/officeIcon.svg"
import { useEffect, useState } from "react"

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const isPhone = screenWidth < 600
  const isTablet = screenWidth >= 600 && screenWidth < 1024

  const items = [
    {
      icon: (
        <img
          src={andrewIcon}
          alt=""
          style={{
            width: "50%",
            height: "50%",
            objectFit: "contain",
          }}
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
          style={{
            width: "60%",
            height: "60%",
            objectFit: "contain",
          }}
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
           style={{
            width: "65%",
            height: "65%",
            objectFit: "contain",
          }}
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
          style={{
            width: "40%",
            height: "40%",
            objectFit: "contain",
          }}
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
          position: "fixed",
          inset: 0,
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
          padding: isPhone ? "20px" : "40px",
          boxSizing: "border-box",
        }}
        >
        <TextType
          style={{
            color: "white",
            fontSize: "clamp(2.4rem, 8vw, 6rem)",
            textAlign: "center",
            whiteSpace: "nowrap",
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
            delay: 2, 
            duration: 1.5,
            ease: "easeOut",
          }}
          style={{
            marginTop: isPhone ? "20px" : isTablet ? "30px" : "40px",
            pointerEvents: "auto",
            color: "white",
          }}
        >
         <Dock
          items={items}
          panelHeight={
            isPhone ? 95 :
            isTablet ? 120 :
            150
          }
          baseItemSize={
            isPhone ? 62 :
            isTablet ? 80 :
            100
          }
          magnification={
            isPhone ? 82 :
            isTablet ? 110 :
            140
          }
          distance={
            isPhone ? 100 :
            isTablet ? 150 :
            200
          }
        />
        </motion.div>
      </div>

      {/* Background */}
      <div
        style={{
          width: "100vw",
          height: "100dvh",
          position: "absolute",
          inset: 0,
        }}
      >
        <FaultyTerminal
          scale={5}
          gridMul={[2, 1]}
          digitSize={1.5}
          timeScale={0.1}
          pause={false}
          scanlineIntensity={0.3}
          glitchAmount={1}
          flickerAmount={0.5}
          noiseAmp={0.7}
          chromaticAberration={25}
          dither={0.5}
          curvature={0}
          tint="#ffffff"
          mouseReact
          mouseStrength={8}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>
    </>
  )
}

export default App