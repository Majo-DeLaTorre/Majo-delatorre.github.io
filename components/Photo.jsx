"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[450px] xl:h-[450px]">
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn"},
        }}
        >
        
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration:0.4, ease: "easeInOut"},
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-[270px] h-[270px] xl:w-[420px] xl:h-[420px] mix-blend-darken rounded-full overflow-hidden"
        >
          <Image
            src="/ProfileTransparent.png"
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-contain"
          />
          </motion.div>

          <motion.svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[300px] h-[300px] xl:w-[450px] xl:h-[450px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
          >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke=" #fc4ade"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360], 
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"

            }}
            />


          </motion.svg>

      </motion.div>
    </div>
  )
}

export default Photo