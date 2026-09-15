import "./Container.css"
import { motion } from "motion/react";
const Container = ({children, animateOnScroll = false}) => {
      if (animateOnScroll) {
    return (
      <motion.div
        className="O-A-container"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }
    return (
        <div className="O-A-container">
            {children}
        </div>
    )
}

export default Container