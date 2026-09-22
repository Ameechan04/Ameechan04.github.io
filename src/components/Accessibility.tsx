import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Accessibility({
  onRandomiseBackground,
}: AccessibilityProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [backgroundEnabled, setBackgroundEnabled] = useState(true);
  const [dyslexiaFontEnabled, setDyslexiaFontEnabled] = useState(false);

  return (
    <div
      className="relative flex flex-col items-end"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      {/* Accessibility button */}
      <button
        type="button"
        className="
          flex
          h-[60px]
          w-[60px]
          items-center
          justify-center
          rounded-full
          border-2
          border-[#3F3F46]
          bg-black/90
          text-white
          shadow-md
          cursor-pointer
        "
        aria-label="Accessibility options"
        aria-expanded={isOpen}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-1/2 w-1/2"
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M5 8h14" />
          <path d="M12 6v6" />
          <path d="m8 21 4-9 4 9" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              top-full
              right-0
              mt-3
              w-72
              rounded-2xl
              border-2
              border-[#3F3F46]
              bg-black/90
              p-4
              text-white
              shadow-xl
              backdrop-blur-md
            "
          >
            <h2 className="mb-4 text-lg font-semibold">
              Accessibility
            </h2>

            <div className="flex flex-col gap-4">
              {/* Font size */}
              <div>
                <p className="mb-2 text-sm">
                  Font Size
                </p>

                <div className="flex gap-2">
                  <button
                    className="rounded-lg border border-[#3F3F46] px-3 py-1 hover:bg-white/10"
                    onClick={() => console.log("Decrease font")}
                  >
                    A-
                  </button>

                  <button
                    className="rounded-lg border border-[#3F3F46] px-3 py-1 hover:bg-white/10"
                    onClick={() => console.log("Reset font")}
                  >
                    A
                  </button>

                  <button
                    className="rounded-lg border border-[#3F3F46] px-3 py-1 hover:bg-white/10"
                    onClick={() => console.log("Increase font")}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Background */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm">
                  Background
                </span>

                <Toggle
                  enabled={backgroundEnabled}
                  onChange={() =>
                    setBackgroundEnabled((prev) => !prev)
                  }
                />
              </div>

              {/* Dyslexia font */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm">
                  Dyslexia Friendly Font
                </span>

                <Toggle
                  enabled={dyslexiaFontEnabled}
                  onChange={() =>
                    setDyslexiaFontEnabled((prev) => !prev)
                  }
                />
              </div>

              {/* Randomise */}
              <button
               onClick={onRandomiseBackground}
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-[#3F3F46]
                  px-4
                  py-2
                  text-sm
                  transition
                  hover:bg-white/10
                "
              >
                Randomise Background
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type ToggleProps = {
  enabled: boolean;
  onChange: () => void;
};

type AccessibilityProps = {
  onRandomiseBackground: () => void;
};
function Toggle({
  enabled,
  onChange,
}: ToggleProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={enabled}
      className={`
        relative
        h-6
        w-11
        rounded-full
        border
        border-[#3F3F46]
        transition-colors
        ${
          enabled
            ? "bg-white"
            : "bg-neutral-800"
        }
      `}
    >
      <motion.span
        animate={{
          x: enabled ? 21 : 3,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className={`
          absolute
          top-[3px]
          left-0
          h-[18px]
          w-[18px]
          rounded-full
          ${
            enabled
              ? "bg-black"
              : "bg-white"
          }
        `}
      />
    </button>
  );
}