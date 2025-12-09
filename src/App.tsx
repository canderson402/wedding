import { useState } from "react"
import { motion } from "motion/react"
import leafLeft from './assets/leaf_left.png'
import tiledBg from './assets/autumn_9.jpg'
import './App.css'

function App() {
  const [key, setKey] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

  const resetAnimation = () => {
    setAnimationComplete(false)
    setKey(prev => prev + 1)
  }

  return (
    <div className="wedding-site">
      {/* Door Animation Overlay */}
      <motion.div
        className="door-container"
        key={key}
        initial={{ opacity: 1 }}
        animate={{ opacity: animationComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
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
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          <img src={leafLeft} alt="" className="door-image door-image-flipped" />
        </motion.div>
      </motion.div>

      {/* Background Layer */}
      <div className="background-layer" style={{ backgroundImage: `url(${tiledBg})` }} />

      {/* Main Wedding Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <motion.p
              className="hero-pretext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Together with their families
            </motion.p>

            <motion.h1
              className="hero-names"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
            >
              Lauren <span className="ampersand">&</span> Cody
            </motion.h1>

            <motion.div
              className="hero-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            />

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              Request the pleasure of your company
            </motion.p>

            <motion.p
              className="hero-date"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              October 17, 2026
            </motion.p>

            <motion.button
              className="hero-rsvp-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.2 }}
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            >
              RSVP Now
            </motion.button>

            <motion.div
              className="hero-scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              <span>Scroll to explore</span>
              <div className="scroll-arrow" />
            </motion.div>
          </div>
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="section rsvp-section">
          <div className="section-container">
            <h2 className="section-title">RSVP</h2>
            <div className="decorative-line" />
            <p className="rsvp-text">
              Kindly respond by September 1st, 2026
            </p>
            <button className="rsvp-button">
              Respond Now
            </button>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section story-section">
          <div className="section-container">
            <h2 className="section-title">Our Story</h2>
            <div className="decorative-line" />
            <p className="story-text">
              Two paths crossed on a crisp autumn day, and from that moment,
              our lives were forever intertwined. What started as a chance encounter
              blossomed into a love story written among falling leaves and golden sunsets.
            </p>
            <p className="story-text">
              Now, as the leaves turn once again, we invite you to join us
              as we begin our next chapter together.
            </p>
          </div>
        </section>

        {/* Wedding Details Section */}
        <section className="section details-section">
          <div className="section-container">
            <h2 className="section-title">Wedding Details</h2>
            <div className="decorative-line" />

            <div className="details-grid">
              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="detail-title">The Date</h3>
                <p className="detail-info">Saturday, October 17th, 2026</p>
                <p className="detail-subinfo">Four o'clock in the afternoon</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="detail-title">The Venue</h3>
                <p className="detail-info">The Autumn Estate</p>
                <p className="detail-subinfo">123 Maple Lane, Somewhere Beautiful</p>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                  </svg>
                </div>
                <h3 className="detail-title">Reception</h3>
                <p className="detail-info">Dinner & Dancing</p>
                <p className="detail-subinfo">Following the ceremony</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="section schedule-section">
          <div className="section-container">
            <h2 className="section-title">Schedule of Events</h2>
            <div className="decorative-line" />

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-time">4:00 PM</div>
                <div className="timeline-content">
                  <h4>Ceremony</h4>
                  <p>Join us as we exchange vows in the garden</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-time">5:00 PM</div>
                <div className="timeline-content">
                  <h4>Cocktail Hour</h4>
                  <p>Drinks and appetizers on the terrace</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-time">6:30 PM</div>
                <div className="timeline-content">
                  <h4>Dinner</h4>
                  <p>A celebration feast in the grand hall</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-time">8:00 PM</div>
                <div className="timeline-content">
                  <h4>Dancing</h4>
                  <p>Let's dance the night away</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-names">L & C</div>
          <p className="footer-date">October 17, 2026</p>
          <button className="reset-button" onClick={resetAnimation}>
            Replay Animation
          </button>
        </footer>
      </main>
    </div>
  )
}

export default App
