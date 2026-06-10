import { motion } from "framer-motion";

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  className,
  ...props 
}) {
  const directions = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // custom ease out
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
