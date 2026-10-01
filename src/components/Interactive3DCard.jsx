import { useRef, useEffect } from 'react';

export default function Interactive3DCard({ children, className = '', maxTilt = 6 }) {
  const cardRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    // Only apply 3D tilt for fine-pointer devices and when reduced motion is not requested
    if (typeof window !== 'undefined') {
      const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!isFinePointer || prefersReducedMotion) return;
    }

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = -mouseY * maxTilt;
    const rotateY = mouseX * maxTilt;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (card) {
        card.style.transition = 'transform 80ms var(--ease-out)';
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    const card = cardRef.current;
    if (card) {
      card.style.transition = 'transform 260ms var(--ease-out)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`interactive-3d-card ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
