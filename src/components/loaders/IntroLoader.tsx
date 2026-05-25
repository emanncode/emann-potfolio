import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Logo from "@/components/branding/Logo";

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="
            fixed
            inset-0
            z-9999
            flex
            items-center
            justify-center
            overflow-hidden
            bg-bg
          "
        >
          {/* GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-120
              w-120
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          {/* CONTENT */}
          <div className="relative flex flex-col items-center">
            {/* LOGO */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Logo />
            </motion.div>

            {/* LOADING LINE */}
            <div
              className="
                relative
                mt-10
                h-px
                w-44
                overflow-hidden
                bg-white/10
              "
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-1/2
                  bg-primary
                "
              />
            </div>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="
                mt-5
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-white/40
              "
            >
              Crafting Digital Experiences
            </motion.p>
          </div>

          {/* GRAIN */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.05]
              mix-blend-soft-light
            "
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}