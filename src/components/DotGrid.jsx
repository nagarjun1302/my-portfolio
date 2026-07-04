import { useEffect, useRef } from 'react';

const PRESET = { baseAlpha: 0.15, hoverBoost: 0.45, rippleBoost: 0.5 };

export default function DotGrid({ className = '', dotColor = "140, 150, 180" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let dots = [];

    const resize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.ceil(w / 20);
      const rows = Math.ceil(h / 20);
      const startX = (w - (cols - 1) * 20) / 2;
      const startY = (h - (rows - 1) * 20) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: startX + 20 * c,
            y: startY + 20 * r,
            rippleProgress: 1,
            rippleDelay: 0
          });
        }
      }
    };

    const draw = () => {
      if (!canvas) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const time = performance.now();
      ctx.clearRect(0, 0, w, h);

      const { x: mx, y: my } = mouseRef.current;

      dots.forEach(dot => {
        if (time > dot.rippleDelay && dot.rippleProgress < 1) {
          dot.rippleProgress += 0.1;
          if (dot.rippleProgress > 1) dot.rippleProgress = 1;
        }

        const dx = mx - dot.x;
        const dy = my - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = PRESET.baseAlpha;
        let size = 2;

        if (dist < 100) {
          const factor = 1 - dist / 100;
          alpha += factor * PRESET.hoverBoost;
          size += 1.5 * factor;
        }

        let currentColor = dotColor;

        if (dot.rippleProgress < 1) {
          const r = Math.sin(dot.rippleProgress * Math.PI);
          size += 1.5 * r;
          alpha += r * PRESET.rippleBoost;
          // Glowing blue ripple wave
          const redVal = Math.floor(43 * r);
          const greenVal = Math.floor(127 * r);
          const blueVal = Math.floor(255 * r);
          currentColor = `${redVal}, ${greenVal}, ${blueVal}`;
        }

        if (alpha > 1) alpha = 1;
        ctx.fillStyle = `rgba(${currentColor}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size / 2, 0, 2 * Math.PI);
        ctx.fill();
      });

      requestRef.current = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
    };

    const handleMouseMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseDown = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;

      if (sx < -50 || sx > rect.width + 50 || sy < -50 || sy > rect.height + 50) return;

      const time = performance.now();
      dots.forEach(dot => {
        const dx = sx - dot.x;
        const dy = sy - dot.y;
        // Radial propagation delay
        dot.rippleDelay = time + 1.5 * Math.sqrt(dx * dx + dy * dy);
        dot.rippleProgress = 0;
      });
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget) {
        mouseRef.current = { x: -1000, y: -1000 };
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseout', handleMouseOut);

    resize();
    requestRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseout', handleMouseOut);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [dotColor]);

  return (
    <div
      ref={containerRef}
      className={`dot-grid-container ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100% - 16px * 2)',
        height: 'calc(100% - 16px * 2)',
        margin: '16px',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        borderRadius: 'inherit'
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
