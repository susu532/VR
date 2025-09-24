import React from 'react';
import styles from './GlowingText.module.css';

const GlowingText = ({ 
  children, 
  variant = 'gradient',
  size = 'medium',
  glow = true,
  animate = false,
  className = '',
  as: Component = 'span',
  ...props 
}) => {
  const textClasses = [
    styles.text,
    styles[variant],
    styles[size],
    glow ? styles.glow : '',
    animate ? styles.animate : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component 
      className={textClasses}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlowingText;