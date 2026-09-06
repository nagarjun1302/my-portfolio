import { useEffect, useRef } from 'react';

const PRESETS = [
  { grayBase: 40, grayActive: 20, baseAlpha: 0.3, rippleBrightness: 0.3, mixIntensity: 0.2, lineOpacity: 0.3 },
  { grayBase: 60, grayActive: 30, baseAlpha: 0.5, rippleBrightness: 0.5, mixIntensity: 0.4, lineOpacity: 0.5 },
  { grayBase: 90, grayActive: 60, baseAlpha: 0.6, rippleBrightness: 0.7, mixIntensity: 0.6, lineOpacity: 0.8 },
  { grayBase: 120, grayActive: 80, baseAlpha: 0.7, rippleBrightness: 1.0, mixIntensity: 0.8, lineOpacity: 1.0 },
  { grayBase: 150, grayActive: 100, baseAlpha: 0.8, rippleBrightness: 1.2, mixIntensity: 1.0, lineOpacity: 1.0 }
];

class Particle {
  constructor(x, y, isInteractive) {
    this.vx = 0;
    this.vy = 0;
    this.size = 2;
    this.targetSize = 2;
    this.morphFactor = 0;
    this.activeAlpha = 0;
    this.staticOpacity = 1;
    this.baseOpacity = 1;
    this.currentOpacity = 1;
    this.introDelay = 0;
    this.introProgress = 0;
    this.rippleDelay = 0;
    this.rippleProgress = 1;
    this.distanceToMouse = Infinity;
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.isInteractive = isInteractive;
    this.noiseOffsetX = 1000 * Math.random();
    this.noiseOffsetY = 1000 * Math.random();
  }

  update(mouse, width, height, time, isHovered, progress, isMousedown) {
    if (time > this.introDelay) {
      this.introProgress += 0.02;
      if (this.introProgress > 1) this.introProgress = 1;
    }
    if (time > this.rippleDelay && this.rippleProgress < 1) {
      this.rippleProgress += 0.05;
      if (this.rippleProgress > 1) this.rippleProgress = 1;
    }

    const opacityFactor = 1 + (this.baseOpacity - 1) * progress;
    this.currentOpacity += ((isHovered ? 1 : opacityFactor) - this.currentOpacity) * (isHovered ? 0.1 : 0.05);

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    this.distanceToMouse = Math.sqrt(dx * dx + dy * dy);
    if (isMousedown) {
      this.distanceToMouse = Infinity;
    }

    const d = this.distanceToMouse;
    if (!this.isInteractive) {
      this.distanceToMouse = Infinity;
      this.morphFactor = 0;
      let opacity = 1;
      if (d < 225) {
        opacity = Math.min(1, Math.pow(d / 225, 15));
      }
      const fadeOut = opacity < this.staticOpacity;
      this.staticOpacity += (opacity - this.staticOpacity) * (fadeOut ? 0.8 : 0.03);
      return;
    }

    this.staticOpacity = 1;
    let hoverIntensity = 0;
    if (this.distanceToMouse < 225) {
      hoverIntensity = 1 - Math.pow(this.distanceToMouse / 225, 2);
    }
    this.morphFactor += (hoverIntensity - this.morphFactor) * 0.1;

    let targetX = this.originX;
    let targetY = this.originY;

    if (this.morphFactor > 0.01) {
      const pull = 0.1 * Math.max(0, 150 - this.distanceToMouse);
      const angle = Math.atan2(dy, dx);
      const noiseScale = 20 * this.morphFactor;
      const noiseX = Math.sin(0.002 * time + this.noiseOffsetX) * noiseScale;
      const noiseY = Math.cos(0.002 * time + this.noiseOffsetY) * noiseScale;
      targetX = this.originX + noiseX - Math.cos(angle) * pull * 5 * this.morphFactor;
      targetY = this.originY + noiseY - Math.sin(angle) * pull * 5 * this.morphFactor;
    }

    const forceX = (targetX - this.x) * 0.05;
    const forceY = (targetY - this.y) * 0.05;
    this.vx += forceX;
    this.vy += forceY;
    this.vx *= 0.85;
    this.vy *= 0.85;
    this.x += this.vx;
    this.y += this.vy;
    this.size = 2 + 4 * this.morphFactor;
  }

  draw(ctx, config, theme = 'light') {
    const isLight = theme === 'light';

    let rippleVal = 0;
    let rippleBright = 0;

    if (this.rippleProgress < 1) {
      const wave = Math.sin(this.rippleProgress * Math.PI);
      rippleVal = wave;
      rippleBright = wave * config.rippleBrightness;
    } else if (this.introProgress < 1 && this.introProgress > 0) {
      const wave = Math.sin(this.introProgress * Math.PI);
      rippleVal = 0.2 * wave;
      rippleBright = 0.4 * config.rippleBrightness * wave;
    }

    let finalR, finalG, finalB;
    if (isLight) {
      // Pure Black Particles for Light Mode
      finalR = 0;
      finalG = 0;
      finalB = 0;
    } else {
      const grayBase = config.grayBase;
      const grayActive = config.grayActive;
      const o = Math.floor(grayBase + (grayActive - grayBase) * this.morphFactor);
      const rVal = Math.floor(o + (255 - o) * this.activeAlpha);
      const mix = rippleBright * config.mixIntensity;
      finalR = Math.floor(rVal + (255 - rVal) * mix);
      finalG = finalR;
      finalB = finalR;
    }

    const baseAlpha = (isLight ? 0.25 : config.baseAlpha) + 0.35 * this.morphFactor;
    let opacity = baseAlpha + (1 - baseAlpha) * this.activeAlpha;

    opacity *= this.staticOpacity * this.currentOpacity;
    opacity += (1 - opacity) * rippleBright;

    if (opacity < 0.01) return;

    ctx.fillStyle = `rgba(${finalR}, ${finalG}, ${finalB}, ${opacity})`;
    ctx.beginPath();

    let easeProgress = Math.max(0, ((p) => {
      const t = 5;
      const pMinusOne = p - 1;
      return pMinusOne * pMinusOne * ((t + 1) * pMinusOne + t) + 1;
    })(this.introProgress));

    easeProgress *= 1 + 0.8 * rippleVal;
    const s = this.size * easeProgress;
    const isRippling = this.rippleProgress < 1;

    if (this.morphFactor < 0.1 && !isRippling) {
      ctx.rect(this.x - s / 2, this.y - s / 2, s, s);
    } else {
      ctx.arc(this.x, this.y, s / 2, 0, 2 * Math.PI);
    }
    ctx.fill();
  }
}

export default function MorphParticles({ className = '', presetIndex = 1, theme = 'light' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const linesRef = useRef([]);
  
  const mouseState = useRef({
    x: -1000,
    y: -1000,
    lastMoveTime: 0
  });

  const startTimeRef = useRef(0);
  const rippleTimeRef = useRef(0);
  const lastRippleTimeRef = useRef(0);
  const isMousedownRef = useRef(false);
  const focusRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const config = PRESETS[presetIndex] || PRESETS[1];

    const resize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      particlesRef.current = [];
      linesRef.current = [];

      const centerX = w / 2;
      const centerY = h / 2;
      const cols = Math.ceil(w / 20);
      const rows = Math.ceil(h / 20);
      const startX = (w - (cols - 1) * 20) / 2;
      const startY = (h - (rows - 1) * 20) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const isInteractive = c % 2 === 0 && r % 2 === 0;
          const px = startX + 20 * c;
          const py = startY + 20 * r;
          
          const p = new Particle(px, py, isInteractive);
          const dx = px - centerX;
          const dy = py - centerY;
          const distToCenter = Math.sqrt(dx * dx + dy * dy);

          p.introDelay = 1.35 * distToCenter;

          let cornerFade = Math.pow(Math.abs(c / cols + r / rows - 1), 1.5);
          cornerFade = Math.min(1, 5 * cornerFade);
          p.baseOpacity = cornerFade;
          p.currentOpacity = 1;

          particlesRef.current.push(p);
        }
      }
    };

    const animate = (timestamp) => {
      if (startTimeRef.current === 0) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      const isIntroActive = elapsed < 2340;
      const hasFocus = document.hasFocus();
      const isMouseIdle = Date.now() - mouseState.current.lastMoveTime > 2500;
      const isHovering = !isMouseIdle && !isIntroActive && hasFocus;

      let mouseToPass = { ...mouseState.current };
      if (isMouseIdle || isIntroActive || !hasFocus) {
        mouseToPass = { x: -1000, y: -1000, lastMoveTime: 0 };
      }

      ctx.clearRect(0, 0, w, h);

      let rippleProgressFactor = elapsed - rippleTimeRef.current;
      let fadeOutProgress = 0;
      if (rippleProgressFactor > 1350) {
        fadeOutProgress = (rippleProgressFactor - 1350) / 1000;
        if (fadeOutProgress > 1) fadeOutProgress = 1;
      }

      const isMousedown = isMousedownRef.current;
      particlesRef.current.forEach(p => p.update(mouseToPass, w, h, elapsed, isHovering, fadeOutProgress, isMousedown));

      const interactiveParticles = particlesRef.current
        .filter(p => p.isInteractive)
        .sort((p1, p2) => p1.distanceToMouse - p2.distanceToMouse);

      const closestSubset = new Set(interactiveParticles.slice(0, 15));
      particlesRef.current.forEach(p => {
        const isClose = closestSubset.has(p);
        const withinDistance = p.distanceToMouse < 225;
        p.activeAlpha += (((isClose && withinDistance) ? 1 : 0) - p.activeAlpha) * 0.2;
      });

      const activeList = Array.from(closestSubset).filter(p => p.distanceToMouse < 225);
      const lines = linesRef.current;

      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        const dx = line.p1.x - line.p2.x;
        const dy = line.p1.y - line.p2.y;
        const distSq = dx * dx + dy * dy;

        const bothActive = closestSubset.has(line.p1) && closestSubset.has(line.p2);
        if (bothActive && distSq <= 14400) {
          line.phase = "in";
        } else {
          line.phase = "out";
        }

        if (line.phase === "in") {
          line.opacity += 0.1;
          if (line.opacity > 1) line.opacity = 1;
        } else {
          line.opacity -= 0.05;
          if (line.opacity <= 0) {
            lines.splice(i, 1);
          }
        }
      }

      if (activeList.length > 1 && lines.length < 20) {
        for (let i = 0; i < 5; i++) {
          const p1 = activeList[Math.floor(Math.random() * activeList.length)];
          const matches = activeList.filter(p2 => {
            if (p1 === p2) return false;
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            return dx * dx + dy * dy < 10000;
          });

          if (matches.length > 0) {
            const p2 = matches[Math.floor(Math.random() * matches.length)];
            const exists = lines.some(line => (line.p1 === p1 && line.p2 === p2) || (line.p1 === p2 && line.p2 === p1));
            const p1Connections = lines.filter(line => line.p1 === p1 || line.p2 === p1).length;

            if (!exists && p1Connections < 2 && Math.random() < 0.1) {
              lines.push({ p1, p2, opacity: 0, phase: "in" });
            }
          }
        }
      }

      // Draw lines
      ctx.lineWidth = 1;
      lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.p1.x, line.p1.y);
        ctx.lineTo(line.p2.x, line.p2.y);
        const strokeStyle = theme === 'light'
          ? `rgba(0, 0, 0, ${line.opacity * config.lineOpacity * 0.5})`
          : `rgba(255, 255, 255, ${line.opacity * config.lineOpacity})`;
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
      });

      // Draw background particles first, then active/morphed ones
      particlesRef.current.forEach(p => {
        if (p.activeAlpha < 0.5) p.draw(ctx, config, theme);
      });
      particlesRef.current.forEach(p => {
        if (p.activeAlpha >= 0.5) p.draw(ctx, config, theme);
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
    };

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        isMousedownRef.current = false;
        mouseState.current = {
          x,
          y,
          lastMoveTime: Date.now()
        };
      } else {
        mouseState.current = { x: -1000, y: -1000, lastMoveTime: 0 };
      }
    };

    const handleMouseDown = (e) => {
      if (performance.now() - startTimeRef.current < 2340 || !document.hasFocus() || focusRef.current || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

      const now = Date.now();
      if (now - lastRippleTimeRef.current < 800) return;
      lastRippleTimeRef.current = now;
      isMousedownRef.current = true;

      const timestamp = performance.now() - startTimeRef.current;
      rippleTimeRef.current = timestamp;

      particlesRef.current.forEach(p => {
        const dx = p.x - x;
        const dy = p.y - y;
        p.rippleProgress = 0;
        // Propagation delay proportional to distance
        p.rippleDelay = timestamp + 0.5 * Math.sqrt(dx * dx + dy * dy);
        p.vx = 0;
        p.vy = 0;
        p.x = p.originX;
        p.y = p.originY;
        p.morphFactor = 0;
        p.activeAlpha = 0;
      });

      linesRef.current = [];
    };

    const handleFocus = () => {
      focusRef.current = true;
      setTimeout(() => {
        focusRef.current = false;
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('focus', handleFocus);

    resize();
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('focus', handleFocus);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [presetIndex]);

  return (
    <div
      ref={containerRef}
      className={`morph-particles-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        borderRadius: 'inherit'
      }}
    >
      <canvas ref={canvasRef} className="morph-particles-canvas" style={{ display: 'block' }} />
    </div>
  );
}
