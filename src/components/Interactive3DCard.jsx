import { useState, useRef } from 'react';

export default function Interactive3DCard({ children, className = '', maxTilt = 15 }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [transitionStyle, setTransitionStyle] = useState('all 0.5s ease');

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the card center (from -0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation degrees based on mouse position
    const rotateX = -mouseY * maxTilt;
    const rotateY = mouseX * maxTilt;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setTransitionStyle('transform 0.1s ease-out');
  };

  const handleMouseLeave = () => {
    // Reset tilt on leave
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setTransitionStyle('transform 0.5s ease');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`interactive-3d-card ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: transformStyle,
        transition: transitionStyle,
        cursor: 'pointer'
      }}
    >
      {children}
    </div>
  );
}
