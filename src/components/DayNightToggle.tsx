import { AnimatePresence, motion } from "motion/react";

type DayNightToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

export default function DayNightToggle({
  isDarkMode,
  onToggle,
}: DayNightToggleProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{ scale: 0.92 }}
     className="
        group
        flex
        h-[60px]
        w-[60px]
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border-2
        border-[#3F3F46]
        bg-black/90
        text-white
        shadow-md
        cursor-pointer
        "
      aria-label={
        isDarkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <AnimatePresence mode="wait" initial={false}>

        {isDarkMode ? (
          /* Moon */
          <motion.svg
            key="moon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="
                h-7
                w-7
                transition-all
                duration-300
                group-hover:fill-white
                group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]
            "
            initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.5,
            }}
            animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.5,
            }}
            transition={{
                duration: 0.25,
                ease: "easeInOut",
            }}
            >
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
            </motion.svg>
        ) : (
          /* Sun */
          <motion.svg
            key="sun"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="
                h-7
                w-7
                transition-all
                duration-300
                group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]
            "
            initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.5,
            }}
            animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.5,
            }}
            transition={{
                duration: 0.25,
                ease: "easeInOut",
            }}
            >
            <circle
                cx="12"
                cy="12"
                r="4"
                className="
                fill-transparent
                transition-all
                duration-300
                group-hover:fill-white
                "
            />

            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.42 1.42" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
            </motion.svg>
        )}

      </AnimatePresence>
    </motion.button>
  );
}