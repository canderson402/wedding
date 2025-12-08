import { useState } from "react"
import { motion } from "motion/react"
import leafLeft from './assets/leaf_left.png'
import tiledBg from './assets/autumn_9.jpg'
import './App.css'

function App() {
  const [key, setKey] = useState(0)

  const resetAnimation = () => {
    setKey(prev => prev + 1)
  }

  return (
    <div className="door-container" key={key} style={{ backgroundImage: `url(${tiledBg})` }}>
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

      {/* Content area */}
      <div className="content-column">
        <motion.h1
          className="header"
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          Lauren & Cody
        </motion.h1>

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
    </div>
  )
}

export default App
