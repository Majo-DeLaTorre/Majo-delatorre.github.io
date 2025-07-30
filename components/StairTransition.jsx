"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
    <AnimatePresence mode="wait">
      <div key={pathname}>

      </div>
      StairTransition
    </AnimatePresence>
    </>
  )
};

export default StairTransition