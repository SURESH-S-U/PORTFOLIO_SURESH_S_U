import { useEffect, useRef } from "react";

const Div_BG = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Define a custom version of FinisherHeader specifically for hero section
    const createHeroParticles = () => {
      // Create canvas
      const canvas = document.createElement("canvas");
      canvas.id = "hero-finisher-canvas";
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.zIndex = "-1";
      
      // Set canvas dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Add canvas to container
      if (headerRef.current) {
        // Clear any existing canvas
        const existingCanvas = headerRef.current.querySelector("#hero-finisher-canvas");
        if (existingCanvas) {
          headerRef.current.removeChild(existingCanvas);
        }
        headerRef.current.appendChild(canvas);
      }
      
      // Initialize particles
      const ctx = canvas.getContext("2d");
      const particles = [];
      const colors = ["#ffffff", "#87ddfe", "#acaaff", "#1bffc2", "#f88aff"];
      const particleCount = 90;
      
      // Helper function to convert hex to RGB
      function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
      }
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const color = colors[i % colors.length];
        const rgb = hexToRgb(color);
        const size = Math.random() * 31 + 1; // 1 to 32
        
        // Determine starting position based on quadrant
        const section = i % 4;
        let x, y;
        
        if (section === 0) {
          // Top section
          x = Math.random() * canvas.width;
          y = Math.random() * (canvas.height / 3);
        } else if (section === 1) {
          // Right section
          x = canvas.width - (Math.random() * (canvas.width / 3));
          y = Math.random() * canvas.height;
        } else if (section === 2) {
          // Bottom section
          x = Math.random() * canvas.width;
          y = canvas.height - (Math.random() * (canvas.height / 3));
        } else {
          // Left section
          x = Math.random() * (canvas.width / 3);
          y = Math.random() * canvas.height;
        }
        
        // Speed
        const xSpeed = (Math.random() * 0.4) * (Math.random() > 0.5 ? 1 : -1);
        const ySpeed = (Math.random() * 0.1) * (Math.random() > 0.5 ? 1 : -1);
        
        // Shape (c = circle, s = square, t = triangle)
        const shapes = ["c", "s", "t"];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        particles.push({
          x, 
          y, 
          size,
          rgb,
          xSpeed,
          ySpeed,
          shape
        });
      }
      
      // Animation loop
      function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Semi-transparent background
        ctx.fillStyle = "rgba(8, 8, 8, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (const p of particles) {
          // Move particle
          p.x += p.xSpeed;
          p.y += p.ySpeed;
          
          // Bounce off edges
          if (p.x < 0 || p.x > canvas.width) p.xSpeed *= -1;
          if (p.y < 0 || p.y > canvas.height) p.ySpeed *= -1;
          
          // Draw particle
          ctx.fillStyle = `rgb(${p.rgb.r}, ${p.rgb.g}, ${p.rgb.b})`;
          ctx.beginPath();
          
          // Draw shape
          if (p.shape === "c") {
            // Circle
            ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          } else if (p.shape === "s") {
            // Square
            ctx.rect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
          } else if (p.shape === "t") {
            // Triangle
            ctx.moveTo(p.x, p.y - p.size/2);
            ctx.lineTo(p.x + p.size/2, p.y + p.size/2);
            ctx.lineTo(p.x - p.size/2, p.y + p.size/2);
          }
          
          ctx.closePath();
          ctx.fill();
        }
        
        // Continue animation loop
        requestAnimationFrame(animate);
      }
      
      // Start animation
      animate();
      
      // Return an object with a cleanup method
      return {
        resize: () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },
        destroy: () => {
          if (canvas.parentNode) {
            canvas.parentNode.removeChild(canvas);
          }
        }
      };
    };
    
    // Create particle system
    const particles = createHeroParticles();
    
    // Handle window resize
    const handleResize = () => {
      if (particles) {
        particles.resize();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (particles) {
        particles.destroy();
      }
    };
  }, []);

  return <div ref={headerRef} className="hero-particles-container" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -1, overflow: "hidden" }}></div>;
};

export default Div_BG;