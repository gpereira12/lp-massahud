"use client";

import React from "react";
import { motion } from "framer-motion";

const Particle = ({ i }: { i: number }) => {
  const [mounted, setMounted] = React.useState(false);
  const [randomValues, setRandomValues] = React.useState({
    duration: 10,
    initialX: 50,
    drift: 0,
    size: 1.5
  });

  React.useEffect(() => {
    setRandomValues({
      duration: 12 + Math.random() * 10,
      initialX: Math.random() * 100,
      drift: Math.random() * 30 - 15,
      size: 2 + Math.random() * 3 // Larger particles for visibility
    });
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute rounded-full bg-[#E8E1B9] blur-[0.5px] opacity-80 select-none pointer-events-none"
      style={{ width: randomValues.size, height: randomValues.size }}
      initial={{ x: `${randomValues.initialX}vw`, y: "120%" }}
      animate={{
        y: "-20%",
        x: [`${randomValues.initialX}vw`, `${randomValues.initialX + randomValues.drift}vw`],
      }}
      transition={{
        duration: randomValues.duration,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.1,
      }}
    />
  );
};

const Transition = () => {
  return (
    <div className="relative h-16 w-full overflow-hidden pointer-events-none z-10 bg-white">
      {/* Background Glow - Essential for particle visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-[#FBFCFE]" />
      
      {/* Atmospheric Particles - Matching Hero Style but Visible */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Transition;
