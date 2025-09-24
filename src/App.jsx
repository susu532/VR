import React from 'react';
import Header3D from './components/layout/Header3D/Header3D';
import EmperiaEmbed from './components/EmperiaEmbed';
import Card3D from './components/ui/Card3D/Card3D';
import GlowingText from './components/ui/GlowingText/GlowingText';
import Button3D from './components/ui/Button3D/Button3D';
import styles from './App.module.css';

export default function App() {
  return (
    
    <div className={styles.appRoot}>
      
      <Header3D />
      <section className={styles.embedSection}>
      
          <EmperiaEmbed />
          <aside className={styles.infoSection}>
          <Card3D variant="neumorphism" className={styles.infoCard}>
            <GlowingText as="h2" variant="gradient" size="large" glow>
              About This Experience
            </GlowingText>
            <p className={styles.description}>
              Immerse yourself in a revolutionary 3D virtual world that blends 
              cutting-edge technology with stunning visual aesthetics. Experience 
              the future of digital interaction.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🌟</div>
                <div>
                  <h4>Immersive 3D</h4>
                  <p>Full 360° virtual environment</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✨</div>
                <div>
                  <h4>Interactive Elements</h4>
                  <p>Touch, explore, and discover</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎨</div>
                <div>
                  <h4>Stunning Visuals</h4>
                  <p>High-quality graphics and effects</p>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <Button3D variant="primary" onClick={() => window.open('https://experience.emperiavr.com/43a7a3df-694a-4288-bd52-45aaac28b975/public/24fbba32-bb60-49b8-bb41-db4516d456ef/index.html', '_blank')}>
                Start Journey
              </Button3D>
              <Button3D variant="secondary">
                Learn More
              </Button3D>
            </div>
          </Card3D>
        </aside>
          
        </section>

      <main className={styles.content}>
       

        
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <GlowingText variant="light" size="small">
            Prototype — SusuExperience ✨
          </GlowingText>
        </div>
      </footer>
    </div>
  );
}