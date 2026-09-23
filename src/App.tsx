import FaultyTerminal from "./components/FaultyTerminal"
import TextType from "./components/TextType"
import Accessibility from "./components/Accessibility";
import Dock from "./components/Dock"
import DayNightToggle from "./components/DayNightToggle";

import { motion } from "motion/react"
import { useEffect, useState } from "react"

import andrewIcon from "./assets/icons/andrewIcon.svg"
import educationIcon from "./assets/icons/educationIcon.svg"
import computerIcon from "./assets/icons/computerIcon.svg"
import officeIcon from "./assets/icons/officeIcon.svg"

import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const randomInt = (min: number, max: number) =>
  Math.floor(randomBetween(min, max + 1));

const randomTint = () => {
  const r = randomInt(120, 255);
  const g = randomInt(120, 255);
  const b = randomInt(120, 255);

  return `#${[r, g, b]
    .map(value => value.toString(16).padStart(2, "0"))
    .join("")}`;
};

const defaultBackground = {
  scale: 5,
  gridMul: [2, 1] as [number, number],
  digitSize: 1.5,
  timeScale: 0.1,
  pause: false,
  scanlineIntensity: 0.3,
  glitchAmount: 1,
  flickerAmount: 0.5,
  noiseAmp: 0.7,
  chromaticAberration: 25,
  dither: 0.5,
  curvature: 0,
  tint: "#ffffff",
  mouseReact: true,
  mouseStrength: 8,
  pageLoadAnimation: true,
  brightness: 0.6,
};


function App() {
  const [backgroundEnabled, setBackgroundEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
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
  const [background, setBackground] = useState(defaultBackground);
  const [backgroundVersion, setBackgroundVersion] = useState(0);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };


  const randomiseBackground = () => {
    setBackground({
      scale: randomBetween(3, 7),
      gridMul: [
        randomBetween(1, 4),
        randomBetween(0.5, 2),
      ],
      digitSize: randomBetween(0.1, 2.2),
      timeScale: randomBetween(0.05, 0.25),
      pause: false,
      scanlineIntensity: randomBetween(0.1, 0.8),
      glitchAmount: randomBetween(0.5, 2),
      flickerAmount: randomBetween(0.1, 1),
      noiseAmp: randomBetween(0.3, 1),
      chromaticAberration: randomBetween(0, 40),
      dither: randomBetween(0.1, 0.9),
      curvature: randomBetween(-10,10),
      tint: randomTint(),
      mouseReact: true,
      mouseStrength: randomBetween(3, 12),
      pageLoadAnimation: true,
      brightness: randomBetween(0.4, 0.8),
    });

    setBackgroundVersion(prev => prev + 1);
  };
  
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
      onClick: () => scrollToSection("about"),
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
      onClick: () => scrollToSection("projects"),
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
      onClick: () => scrollToSection("education"),
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
      onClick: () => scrollToSection("experience"),
    },
  ];

  return (
    <div className="bg-[#0d0d0d]">
      {/* Text + Dock overlay */}
      <section
          className="relative w-full h-dvh overflow-visible"
        >
          {/* FaultyTerminal background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,

            // Extend 100px into the next section
            height: "calc(100% + 180px)",

            zIndex: 0,
            backgroundColor: "#0d0d0d",

            clipPath: `
              polygon(
                0 0,
                100% 0,

                100% calc(100% - 30px),
                94% calc(100% - 30px),

                94% calc(100% - 65px),
                92% calc(100% - 65px),

                92% calc(100% - 100px),
                91% calc(100% - 100px),

                91% calc(100% - 290px),
                83% calc(100% - 290px),

                83% calc(100% - 180px),
                80% calc(100% - 180px),

                80% calc(100% - 220px),
                78% calc(100% - 220px),

                78% calc(100% - 180px),
                75% calc(100% - 180px),

                75% calc(100% - 130px),
                72% calc(100% - 130px),

                72% calc(100% - 155px),
                69% calc(100% - 155px),

                69% calc(100% - 125px),
                66% calc(100% - 125px),

                66% calc(100% - 235px),
                59% calc(100% - 235px),

                59% calc(100% - 150px),
                54% calc(100% - 150px),

                54% calc(100% - 225px),
                49% calc(100% - 225px),

                49% calc(100% - 145px),
                47% calc(100% - 145px),

                47% calc(100% - 110px),
                45% calc(100% - 110px),

                45% calc(100% - 75px),
                39% calc(100% - 75px),

                39% calc(100% - 55px),
                36% calc(100% - 55px),

                36% calc(100% - 175px),
                30% calc(100% - 175px),

                30% calc(100% - 160px),
                28% calc(100% - 160px),

                28% calc(100% - 175px),
                25% calc(100% - 175px),

                25% calc(100% - 95px),
                18% calc(100% - 95px),

                18% calc(100% - 60px),
                15% calc(100% - 60px),

                15% calc(100% - 20px),
                0 calc(100% - 20px)
              )
            `,
          }}
        >
          {backgroundEnabled && (
            <FaultyTerminal
              key={backgroundVersion}
              {...background}
            />
          )}
        </div>

          <div className="absolute top-5 right-5 z-20 flex items-start gap-3">
            <DayNightToggle
              isDarkMode={isDarkMode}
              onToggle={() =>
                setIsDarkMode((prev) => !prev)
              }
            />

            <Accessibility
              backgroundEnabled={backgroundEnabled}
              onBackgroundToggle={() =>
                setBackgroundEnabled((prev) => !prev)
              }
              onRandomiseBackground={randomiseBackground}
            />
          </div>

          {/* Text + Dock */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              pointerEvents: "none",

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

                // Allows dock interaction while clicks outside it
                // still reach FaultyTerminal
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
          {/* <div
            className="absolute bottom-0 left-0 z-10 h-24 w-full bg-[#0d0d0d]"
            style={{
              clipPath:
                "polygon(0 70%, 25% 70%, 29% 35%, 58% 35%, 62% 80%, 100% 80%, 100% 100%, 0 100%)",
            }}
          /> */}
        </section>
        <AboutMe />
        <Projects />
        <Education />
        <WorkExperience />
    </div>
  )
}

export default App