import { useEffect } from "react";

const Div_BG = () => {
  useEffect(() => {
    if (!window.FinisherHeader) {
      (function (t) {
        function i(t, i) {
          var s = Math.tan(0.017453 * Math.abs(t));
          return Math.ceil(i * s);
        }
        function s(t) {
          var i = void 0;
          return /^#([A-Fa-f0-9]{3}){1,2}$/.test(t)
            ? ((i = t.substring(1).split("")),
              3 === i.length &&
                (i = [i[0], i[0], i[1], i[1], i[2], i[2]]),
              { r: (i = "0x" + i.join("")) >> 16 & 255, g: i >> 8 & 255, b: 255 & i })
            : { r: 0, g: 0, b: 0 };
        }
        function gnfr(range) {
          return Math.random() * (range.max - range.min) + range.min;
        }
        var e = function () {
          function t(i, e, h) {
            this.o = h;
            this.r = s(i);
            this.d = this.grd();
            this.h = this.grs();
            this.s = Math.abs(gnfr(this.o.size));
            // Set position based on index (replacing the missing srpgq function)
            this.setPosition(e);
            this.vx = gnfr(this.o.speed.x) * this.grd();
            this.vy = gnfr(this.o.speed.y) * this.grd();
          }
          
          t.prototype.grd = function () {
            return Math.random() > 0.5 ? 1 : -1;
          };
          
          t.prototype.setPosition = function (index) {
            // Set initial position based on index
            const section = index % 4;
            const canvasWidth = this.o.c.w || window.innerWidth;
            const canvasHeight = this.o.c.h || window.innerHeight;
            
            if (section === 0) {
              // Top section
              this.x = Math.random() * canvasWidth;
              this.y = Math.random() * (canvasHeight / 3);
            } else if (section === 1) {
              // Right section
              this.x = canvasWidth - (Math.random() * (canvasWidth / 3));
              this.y = Math.random() * canvasHeight;
            } else if (section === 2) {
              // Bottom section
              this.x = Math.random() * canvasWidth;
              this.y = canvasHeight - (Math.random() * (canvasHeight / 3));
            } else {
              // Left section
              this.x = Math.random() * (canvasWidth / 3);
              this.y = Math.random() * canvasHeight;
            }
          };
          
          return (
            (t.prototype.grs = function () {
              return Math.random() * 360;
            }),
            (t.prototype.an = function (t, s, e) {
              this.x += this.vx;
              this.y += this.vy;
              this.x < 0 ? ((this.vx *= -1), (this.x += 1)) : this.x > s && ((this.vx *= -1), (this.x -= 1));
              this.y < 0 ? ((this.vy *= -1), (this.y += 1)) : this.y > e && ((this.vy *= -1), (this.y -= 1));
              t.beginPath();
              t.arc(this.x, this.y, Math.abs(this.s / 2), 0, 6.283185, !1);
              t.closePath();
              t.fill();
            }),
            t
          );
        }();
        var h = function () {
          function h(i) {
            this.c = document.createElement("canvas");
            this.x = this.c.getContext("2d");
            this.init(i);
            t.requestAnimationFrame(this.an.bind(this));
          }
          return (
            (h.prototype.init = function (t) {
              this.o = t;
              this.ps = [];
              this.c.width = this.o.c.w = this.o.c.w || window.innerWidth;
              this.c.height = this.o.c.h = this.o.c.h || window.innerHeight;
              document.getElementById("finisher-header").appendChild(this.c);
              this.cp();
            }),
            (h.prototype.cp = function () {
              this.ps = [];
              for (var i = 0; i < this.o.count; i++) {
                this.ps[i] = new e(this.o.colors.particles[i % this.o.colors.particles.length], i % 4, this.o);
              }
            }),
            (h.prototype.an = function () {
              t.requestAnimationFrame(this.an.bind(this));
              this.x.clearRect(0, 0, this.o.c.w, this.o.c.h);
              
              // Set background color if specified
              if (this.o.colors.background) {
                this.x.fillStyle = this.o.colors.background;
                this.x.fillRect(0, 0, this.o.c.w, this.o.c.h);
              }
              
              // Draw particles
              for (var i = 0; i < this.o.count; i++) {
                this.x.fillStyle = 'rgb(' + this.ps[i].r.r + ',' + this.ps[i].r.g + ',' + this.ps[i].r.b + ')';
                this.ps[i].an(this.x, this.o.c.w, this.o.c.h);
              }
            }),
            h
          );
        }();
        t.FinisherHeader = h;
      })(window);
    }

    const header = new window.FinisherHeader({
      count: 90,
      size: { min: 1, max: 32, pulse: 0 },
      speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.1 } },
      colors: {
        background: "#080808",
        particles: ["#ffffff", "#87ddfe", "#acaaff", "#1bffc2", "#f88aff"],
      },
      blending: "screen",
      opacity: { center: 0, edge: 0.4 },
      skew: -2,
      shapes: ["c", "s", "t"],
      c: {
        w: window.innerWidth,
        h: window.innerHeight
      }
    });
    
    // Handle window resize
    const handleResize = () => {
      if (header && header.c) {
        header.c.width = header.o.c.w = window.innerWidth;
        header.c.height = header.o.c.h = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      const headerElement = document.getElementById("finisher-header");
      if (headerElement && headerElement.firstChild) {
        headerElement.removeChild(headerElement.firstChild);
      }
    };
  }, []);

  return <div id="finisher-header" style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: -1 }}></div>;
};

export default Div_BG;