import React, { useRef, useEffect } from 'react';
import styles from './Card3D.module.css';

const Card3D = ({ 
  children, 
  variant = 'glass',
  hover3D = true,
  className = '',
  ...props 
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!hover3D) return;

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hover3D]);

  const cardClasses = [
    styles.card,
    styles[variant],
    hover3D ? styles.hover3d : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={cardRef}
      className={cardClasses}
      {...props}
    >
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.glow}></div>
    </div>
  );
};

export default Card3D;