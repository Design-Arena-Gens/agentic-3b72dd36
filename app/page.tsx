'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [energyLevel, setEnergyLevel] = useState(0)
  const [radarWaves, setRadarWaves] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([])
  const [activeDemo, setActiveDemo] = useState<'stealth' | 'energy' | '6g'>('stealth')

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevel(prev => (prev >= 100 ? 0 : prev + 2))

      setRadarWaves(prev => {
        const filtered = prev
          .map(wave => ({ ...wave, opacity: wave.opacity - 0.02, y: wave.y + 2 }))
          .filter(wave => wave.opacity > 0)

        if (Math.random() > 0.7) {
          filtered.push({
            id: Date.now(),
            x: Math.random() * 100,
            y: -10,
            opacity: 1
          })
        }

        return filtered
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.waves}>
          {radarWaves.map(wave => (
            <div
              key={wave.id}
              className={styles.wave}
              style={{
                left: `${wave.x}%`,
                top: `${wave.y}%`,
                opacity: wave.opacity,
              }}
            />
          ))}
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Multifunctional Electromagnetic Surface
            <span className={styles.subtitle}>Converting Radar Waves Into Usable Electricity</span>
          </h1>

          <div className={styles.badge}>
            <span className={styles.badgeIcon}>⚡</span>
            Xidian University Breakthrough | December 2025
          </div>

          <p className={styles.description}>
            Revolutionary reconfigurable intelligent surfaces (RIS) that simultaneously harvest
            energy from ambient electromagnetic waves while supporting 6G telecommunications and
            military stealth operations.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>RIS</div>
              <div className={styles.statLabel}>Technology</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>6G</div>
              <div className={styles.statLabel}>Compatible</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Energy Harvest</div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Key Applications</h2>

        <div className={styles.featureGrid}>
          <div
            className={`${styles.featureCard} ${activeDemo === 'stealth' ? styles.active : ''}`}
            onClick={() => setActiveDemo('stealth')}
          >
            <div className={styles.featureIcon}>🛩️</div>
            <h3>Military Stealth</h3>
            <p>
              Absorb enemy radar detection beams instead of simply evading them,
              converting hostile signals into power for onboard systems.
            </p>
            <div className={styles.featureDetail}>
              Future stealth aircraft can power communications equipment from radar waves
            </div>
          </div>

          <div
            className={`${styles.featureCard} ${activeDemo === 'energy' ? styles.active : ''}`}
            onClick={() => setActiveDemo('energy')}
          >
            <div className={styles.featureIcon}>⚡</div>
            <h3>Energy Harvesting</h3>
            <p>
              Convert ambient electromagnetic waves into usable electricity,
              enabling self-powered devices and sustainable energy solutions.
            </p>
            <div className={styles.featureDetail}>
              Harvest energy from radar, 5G/6G signals, and other RF sources
            </div>
          </div>

          <div
            className={`${styles.featureCard} ${activeDemo === '6g' ? styles.active : ''}`}
            onClick={() => setActiveDemo('6g')}
          >
            <div className={styles.featureIcon}>📡</div>
            <h3>6G Communications</h3>
            <p>
              Support next-generation wireless telecommunications with reconfigurable
              intelligent surfaces for enhanced signal propagation.
            </p>
            <div className={styles.featureDetail}>
              Simultaneous communication and energy harvesting capabilities
            </div>
          </div>
        </div>
      </section>

      <section className={styles.demo}>
        <h2 className={styles.sectionTitle}>Live Energy Harvesting Simulation</h2>

        <div className={styles.demoContainer}>
          <div className={styles.surface}>
            <div className={styles.surfaceGrid}>
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={styles.surfaceCell}
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    opacity: energyLevel > (i / 64) * 100 ? 1 : 0.3
                  }}
                />
              ))}
            </div>
            <div className={styles.surfaceLabel}>Reconfigurable Intelligent Surface</div>
          </div>

          <div className={styles.energyDisplay}>
            <div className={styles.energyBar}>
              <div
                className={styles.energyFill}
                style={{ width: `${energyLevel}%` }}
              />
            </div>
            <div className={styles.energyText}>
              Energy Harvested: <span className={styles.energyValue}>{energyLevel}%</span>
            </div>
            <div className={styles.waveInfo}>
              Incoming Radar Waves: <span className={styles.waveCount}>{radarWaves.length}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.research}>
        <h2 className={styles.sectionTitle}>Research Details</h2>

        <div className={styles.researchGrid}>
          <div className={styles.researchCard}>
            <h3>📚 Publication</h3>
            <p><strong>Journal:</strong> National Science Review</p>
            <p><strong>Date:</strong> December 2025</p>
            <p><strong>Lead Researcher:</strong> Yajie Mu et al.</p>
          </div>

          <div className={styles.researchCard}>
            <h3>🏛️ Institution</h3>
            <p><strong>University:</strong> Xidian University</p>
            <p><strong>Location:</strong> China</p>
            <p><strong>Field:</strong> Electromagnetic Engineering</p>
          </div>

          <div className={styles.researchCard}>
            <h3>🔬 Technology</h3>
            <p><strong>Core:</strong> Reconfigurable Intelligent Surfaces</p>
            <p><strong>Function:</strong> Dual-mode operation</p>
            <p><strong>Innovation:</strong> Simultaneous energy + communication</p>
          </div>

          <div className={styles.researchCard}>
            <h3>🎯 Impact</h3>
            <p><strong>Military:</strong> Enhanced stealth capabilities</p>
            <p><strong>Civilian:</strong> 6G infrastructure</p>
            <p><strong>Energy:</strong> Wireless power transmission</p>
          </div>
        </div>
      </section>

      <section className={styles.technology}>
        <h2 className={styles.sectionTitle}>How It Works</h2>

        <div className={styles.techFlow}>
          <div className={styles.techStep}>
            <div className={styles.techNumber}>1</div>
            <h3>Radar Wave Detection</h3>
            <p>Incoming electromagnetic waves (radar, RF signals) encounter the RIS</p>
          </div>

          <div className={styles.techArrow}>→</div>

          <div className={styles.techStep}>
            <div className={styles.techNumber}>2</div>
            <h3>Wave Absorption</h3>
            <p>Reconfigurable surface absorbs electromagnetic energy instead of reflecting</p>
          </div>

          <div className={styles.techArrow}>→</div>

          <div className={styles.techStep}>
            <div className={styles.techNumber}>3</div>
            <h3>Energy Conversion</h3>
            <p>Absorbed waves converted to electrical current through rectification</p>
          </div>

          <div className={styles.techArrow}>→</div>

          <div className={styles.techStep}>
            <div className={styles.techNumber}>4</div>
            <h3>Power & Communicate</h3>
            <p>Harvested energy powers systems while maintaining 6G communication</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Multifunctional Electromagnetic Surface Technology</p>
        <p>Research by Xidian University | Published in National Science Review, December 2025</p>
      </footer>
    </main>
  )
}
