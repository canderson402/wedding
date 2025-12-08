import { useState } from "react"
import { motion } from "motion/react"
import leafLeft from './assets/leaf_left.png'
import './App.css'

function App() {
  const [key, setKey] = useState(0)

  const resetAnimation = () => {
    setKey(prev => prev + 1)
  }

  return (
    <div className="door-container" key={key}>
      {/* Left door */}
      <motion.div
        className="door door-left"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      >
        <img src={leafLeft} alt="" className="door-image" />
      </motion.div>

      {/* Right door */}
      <motion.div
        className="door door-right"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      >
        <img src={leafLeft} alt="" className="door-image door-image-flipped" />
      </motion.div>

      {/* Centered header */}
      <motion.h1
        className="header"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        Welcome
      </motion.h1>

      {/* Reset button */}
      <motion.button
        className="reset-button"
        onClick={resetAnimation}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Reset
      </motion.button>
    </div>
  )
}

export default App
