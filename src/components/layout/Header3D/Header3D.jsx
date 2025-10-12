import React, { useEffect, useState } from 'react';
import GlowingText from '../../ui/GlowingText/GlowingText';
import Button3D from '../../ui/Button3D/Button3D';
import styles from './Header3D.module.css';
import img1 from '../../../assets/1000_F_839888489_g1f8jLP4AyXMEsoXekAvPeQQvtW6Dbbc.jpg';
import img2 from '../../../assets/360_F_1215424926_eSPkAOg48PI7rvrz1RPA0enMksBVBWXc.jpg';
import img3 from '../../../assets/thumbbig-1382576.jpeg';

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
            <Button3D variant="primary" size="large"  onClick={() => window.open('https://experience.emperiavr.com/43a7a3df-694a-4288-bd52-45aaac28b975/public/e137be28-5972-412b-a139-adbe00640d5b/index.html', '_blank')}>
              Enter Experience
            </Button3D>
            <Button3D variant="outline" size="large">
              Learn More
            </Button3D>
          </div>
        </div>
        
        <div className={styles.floatingElements}>
          <div className={styles.floatingCard1}>
            <img src={img1} alt="Floating 1" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit'}} />
          </div>
          <div className={styles.floatingCard2}>
            <img src={img2} alt="Floating 2" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit'}} />
          </div>
          <div className={styles.floatingCard3}>
            <img src={img3} alt="Floating 3" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit'}} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header3D;