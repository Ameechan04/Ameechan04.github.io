import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type AccessibilityProps = {
  onClick?: () => void;
};

export default function Accessibility({
  onClick,
}: AccessibilityProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.button
        type="button"
        initial={false}
        animate={{
          width: isHovered ? 80 : 60,
          height: isHovered ? 80 : 60,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 150,
          damping: 12,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={onClick}
        className="
          relative
          flex
          items-center
          justify-center
          rounded-full
          bg-black/90
          border-2
          border-[#3F3F46]
          shadow-md
          cursor-pointer
        "
        aria-label="Accessibility options"
      >
        {/* Accessibility icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-1/2 h-1/2 text-white"
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M5 8h14" />
          <path d="M12 6v6" />
          <path d="m8 21 4-9 4 9" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              top-full
              right-0
              mt-3
              whitespace-nowrap
              rounded-md
              border
              border-neutral-700
              bg-black/90
              px-3
              py-1
              text-sm
              text-white
            "
          >
            Accessibility
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}