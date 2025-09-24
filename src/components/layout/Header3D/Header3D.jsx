import React, { useEffect, useState } from 'react';
import GlowingText from '../../ui/GlowingText/GlowingText';
import Button3D from '../../ui/Button3D/Button3D';
import styles from './Header3D.module.css';

const Header3D = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.titleWrapper}>
            <GlowingText 
              as="h1" 
              variant="gradient" 
              size="xlarge" 
              glow 
              animate
              className={styles.title}
            >
              MohamedVr Experience
            </GlowingText>
            <div className={styles.subtitle}>
              <GlowingText 
                as="p" 
                variant="light" 
                size="medium"
                className={styles.description}
              >
                Immerse yourself in a revolutionary 3D virtual world
              </GlowingText>
            </div>
          </div>
          
          <div className={styles.ctaButtons}>
            <Button3D variant="primary" size="large">
              Enter Experience
            </Button3D>
            <Button3D variant="outline" size="large">
              Learn More
            </Button3D>
          </div>
        </div>
        
        <div className={styles.floatingElements}>
          <div className={styles.floatingCard1}></div>
          <div className={styles.floatingCard2}></div>
          <div className={styles.floatingCard3}></div>
        </div>
      </div>
    </header>
  );
};

export default Header3D;