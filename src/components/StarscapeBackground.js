import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StarscapeBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars array
    const stars = [];
    const meteors = [];
    const numStars = 200;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2
      });
    }

    // Meteor class
    class Meteor {
      constructor() {
        this.x = Math.random() * canvas.width + 100;
        this.y = -50;
        this.speed = Math.random() * 3 + 2;
        this.length = Math.random() * 80 + 20;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.angle = Math.random() * Math.PI / 6 + Math.PI / 6; // 30-60 degrees
      }

      update() {
        this.x -= this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.opacity -= 0.005;
      }

      draw() {
        if (this.opacity <= 0) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for meteor trail
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x + this.length * Math.cos(this.angle + Math.PI),
          this.y - this.length * Math.sin(this.angle + Math.PI)
        );
        gradient.addColorStop(0, '#10B981');
        gradient.addColorStop(0.5, '#14B8A6');
        gradient.addColorStop(1, 'transparent');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + this.length * Math.cos(this.angle + Math.PI),
          this.y - this.length * Math.sin(this.angle + Math.PI)
        );
        ctx.stroke();

        ctx.restore();
      }

      isVisible() {
        return this.opacity > 0 && this.x > -this.length && this.y < canvas.height + this.length;
      }
    }

    // Animation loop
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016; // ~60fps

      // Draw stars with twinkling effect
      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.fillStyle = '#10B981';
        ctx.shadowColor = '#10B981';
        ctx.shadowBlur = star.size * 2;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Create new meteors occasionally
      if (Math.random() < 0.003) {
        meteors.push(new Meteor());
      }

      // Update and draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const meteor = meteors[i];
        meteor.update();
        meteor.draw();

        if (!meteor.isVisible()) {
          meteors.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarscapeBackground; 