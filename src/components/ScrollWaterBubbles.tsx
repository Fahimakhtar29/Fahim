import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  initialX: number;
  radius: number;
  vy: number;
  amplitude: number;
  frequency: number;
  phase: number;
  life: number;
  maxLife: number;
  opacity: number;
  direction: 'up' | 'down';
}

export const ScrollWaterBubbles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const lastScrollYRef = useRef<number>(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    lastScrollYRef.current = window.scrollY;

    const spawnBubbles = (count: number, direction: 'up' | 'down') => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 12 + 6; // 6px to 18px radius
        const initialX = Math.random() * (w - 40) + 20;
        
        // Spawn from bottom when scrolling down, or from lower-middle when scrolling up
        const startY = direction === 'down' 
          ? h + Math.random() * 40 
          : h * 0.8 + Math.random() * (h * 0.2);

        bubblesRef.current.push({
          x: initialX,
          y: startY,
          initialX,
          radius,
          vy: -(Math.random() * 1.8 + 1.2), // float upwards
          amplitude: Math.random() * 30 + 15, // 15px to 45px zig-zag sway
          frequency: Math.random() * 0.04 + 0.02, // zig-zag frequency
          phase: Math.random() * Math.PI * 2,
          life: 0,
          maxLife: Math.floor(Math.random() * 100 + 120), // 120-220 frames (~2-4 seconds)
          opacity: 0,
          direction,
        });
      }

      // Cap max active bubbles for smooth 60fps performance
      if (bubblesRef.current.length > 70) {
        bubblesRef.current = bubblesRef.current.slice(-70);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;

      if (Math.abs(delta) > 3) {
        const direction = delta > 0 ? 'down' : 'up';
        // Spawn more bubbles depending on scroll speed
        const count = Math.min(Math.ceil(Math.abs(delta) / 12), 6);
        spawnBubbles(count, direction);
      }

      lastScrollYRef.current = currentScrollY;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const activeBubbles: Bubble[] = [];

      for (let i = 0; i < bubblesRef.current.length; i++) {
        const b = bubblesRef.current[i];
        b.life += 1;

        // Calculate opacity fade in and fade out
        const lifeRatio = b.life / b.maxLife;
        if (lifeRatio < 0.15) {
          b.opacity = lifeRatio / 0.15;
        } else if (lifeRatio > 0.75) {
          b.opacity = (1 - lifeRatio) / 0.25;
        } else {
          b.opacity = 1;
        }

        // Zig-zag motion math: x position sways smoothly using sine wave
        b.y += b.vy;
        b.x = b.initialX + Math.sin(b.life * b.frequency + b.phase) * b.amplitude;

        if (b.life < b.maxLife && b.y + b.radius > -50 && b.opacity > 0.01) {
          activeBubbles.push(b);

          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, b.opacity * 0.85));

          // Draw Outer Bubble Water Body
          const grad = ctx.createRadialGradient(
            b.x - b.radius * 0.3,
            b.y - b.radius * 0.3,
            b.radius * 0.1,
            b.x,
            b.y,
            b.radius
          );
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          grad.addColorStop(0.3, 'rgba(224, 247, 250, 0.6)');
          grad.addColorStop(0.7, 'rgba(79, 195, 247, 0.4)');
          grad.addColorStop(1, 'rgba(0, 174, 239, 0.6)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          ctx.fill();

          // Draw Shiny Highlight Rim
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.lineWidth = Math.max(1, b.radius * 0.12);
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius - ctx.lineWidth / 2, 0, Math.PI * 2);
          ctx.stroke();

          // Draw Secondary Inner Specular Light Reflexion
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.beginPath();
          ctx.ellipse(
            b.x - b.radius * 0.35,
            b.y - b.radius * 0.35,
            b.radius * 0.3,
            b.radius * 0.18,
            -Math.PI / 4,
            0,
            Math.PI * 2
          );
          ctx.fill();

          // Subtle bottom reflection glow
          ctx.fillStyle = 'rgba(0, 174, 239, 0.5)';
          ctx.beginPath();
          ctx.arc(b.x + b.radius * 0.2, b.y + b.radius * 0.3, b.radius * 0.25, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      }

      bubblesRef.current = activeBubbles;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40 w-full h-full"
    />
  );
};
