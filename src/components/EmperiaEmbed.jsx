import React, { useState } from 'react';
import Card3D from './ui/Card3D/Card3D';
import Button3D from './ui/Button3D/Button3D';
import GlowingText from './ui/GlowingText/GlowingText';
import styles from './EmperiaEmbed.module.css';

// Replace this with your Emperia experience URL from the Emperia dashboard
const EMPERIA_URL = 'https://experience.emperiavr.com/43a7a3df-694a-4288-bd52-45aaac28b975/public/24fbba32-bb60-49b8-bb41-db4516d456ef/index.html';

export default function EmperiaEmbed() {
  const [url] = useState(EMPERIA_URL);
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    
    <Card3D variant="glass" hover3D={false} className={styles.emperiaCard}>
      <div className={styles.emperiaCard}>  <div className={styles.emperiaToolbar}>
        <div>
          <div className={styles.badge}>
            <GlowingText variant="gradient" size="small">
              ✨ Virtual Experience
            </GlowingText>
          </div>
        
        </div>
      <Button3D 
            variant="outline" 
            size="small"
            onClick={() => window.open(url, '_blank')}
          >
            Open in New Tab
          </Button3D></div>
         <iframe
            title="Virtual Experience"
            src={url}
            frameBorder="0"
            allow="autoplay; fullscreen; vr; xr-spatial-tracking; gyroscope; accelerometer"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
            onLoad={handleIframeLoad}
            className={styles.iframe}
          /></div>
     
      <div className={styles.emperiaWrapper}>
       

        <div className={styles.emperiaFrame}>
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingSpinner}></div>
              <GlowingText variant="light" size="medium">
                Loading Experience...
              </GlowingText>
            </div>
          )}
          
        </div>
      </div>
      
    </Card3D>
  );
}