import { motion } from "framer-motion";

function ParallaxText({ children, direction }) {
 
  return (
    <div className="parallax">
      <motion.div
        className="scroller"
        initial={{ x: "0%" }}
        animate={{ x: direction }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10, ease: "anticipate", delay: 0  }}
        style={{ width: "100%" }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        
        
      </motion.div>
    </div>
  );
}

export default ParallaxText;


