import { useEffect, useRef } from 'react';

const Entire_BG = ({ 
  count = 100,
  size = { min: 2, max: 32, pulse: 0 },
  speed = { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.6 } },
  colors = {
    background: "#201e30",
    particles: ["#fbfcca", "#d7f3fe", "#ffd0a7"]
  },
  blending = "overlay",
  opacity = { center: 1, edge: 0 },
  skew = -2,
  shapes = ["c"],
  className = "finisher-header"
}) => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Inject the FinisherHeader code
    if (!window.FinisherHeader) {
      (function(t){function i(t,i){var s=Math.tan(.017453*Math.abs(t));return Math.ceil(i*s)}function s(t){var i=void 0;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)?(3===(i=t.substring(1).split("")).length&&(i=[i[0],i[0],i[1],i[1],i[2],i[2]]),{r:(i="0x"+i.join(""))>>16&255,g:i>>8&255,b:255&i}):{r:0,g:0,b:0}}var e=function(){function t(i,e,h){this.o=h,this.r=s(i),this.d=this.grd(),this.h=this.grs(),this.s=Math.abs(this.gnfr(this.o.size)),this.srpgq(e),this.vx=this.gnfr(this.o.speed.x)*this.grd(),this.vy=this.gnfr(this.o.speed.y)*this.grd()}return t.prototype.srpgq=function(t){var i=this.srpiq();return 3===t?(this.x=i.x+i.halfWidth,void(this.y=i.y)):2===t?(this.x=i.x,void(this.y=i.y+i.halfHeight)):1===t?(this.x=i.x+i.halfWidth,void(this.y=i.y+i.halfHeight)):(this.x=i.x,void(this.y=i.y))},t.prototype.srpiq=function(){var t=this.o.c.w/2,i=this.o.c.h/2;return{x:Math.random()*t,y:Math.random()*i,halfHeight:i,halfWidth:t}},t.prototype.gnfr=function(t){if(t.min===t.max)return t.min;var i=t.max-t.min;return Math.random()*i+t.min},t.prototype.grd=function(){return Math.random()>.5?1:-1},t.prototype.grs=function(){return this.o.shapes[Math.floor(Math.random()*this.o.shapes.length)]},t.prototype.gr=function(t,i){return"rgba("+t.r+", "+t.g+", "+t.b+", "+i+")"},t.prototype.an=function(t,s,e){this.o.size.pulse&&(this.s+=this.o.size.pulse*this.d,(this.s>this.o.size.max||this.s<this.o.size.min)&&(this.d*=-1),this.s=Math.abs(this.s)),this.x+=this.vx,this.y+=this.vy,this.x<0?(this.vx*=-1,this.x+=1):this.x>s&&(this.vx*=-1,this.x-=1),this.y<0?(this.vy*=-1,this.y+=1):this.y>e&&(this.vy*=-1,this.y-=1),t.beginPath(),this.o.blending&&"none"!==this.o.blending&&(t.globalCompositeOperation=this.o.blending);var h=this.gr(this.r,this.o.opacity.center),a=this.gr(this.r,this.o.opacity.edge),n="c"===this.h?this.s/2:"t"===this.h?.577*this.s:"s"===this.h?.707*this.s:this.s,o=t.createRadialGradient(this.x,this.y,.01,this.x,this.y,n);o.addColorStop(0,h),o.addColorStop(1,a),t.fillStyle=o;var r=Math.abs(this.s/2);if("c"===this.h&&t.arc(this.x,this.y,r,0,6.283185,!1),"s"===this.h){var c=this.x-r,l=this.x+r,u=this.y-r,d=this.y+r;t.moveTo(c,d),t.lineTo(l,d),t.lineTo(l,u),t.lineTo(c,u)}if("t"===this.h){var v=i(30,r),g=this.y+v;t.moveTo(this.x-r,g),t.lineTo(this.x+r,g),t.lineTo(this.x,this.y-2*v)}t.closePath(),t.fill()},t}(),h=function(){function h(i){var s=this;this.c=document.createElement("canvas"),this.x=this.c.getContext("2d"),this.c.setAttribute("id","finisher-canvas"),this.gr(i.className).appendChild(this.c);var e=void 0;t.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(s.resize.bind(s),150)},!1),this.init(i),t.requestAnimationFrame(this.an.bind(this))}return h.prototype.gr=function(t){var i=document.getElementsByClassName(t||"finisher-header");if(!i.length)throw new Error("No .finisher-header element found");return i[0]},h.prototype.resize=function(){var t=this.gr(this.o.className);this.o.c={w:t.clientWidth,h:t.clientHeight},this.c.width=this.o.c.w,this.c.height=this.o.c.h;var s=i(this.o.skew,this.o.c.w/2),e="skewY("+this.o.skew+"deg) translateY(-"+s+"px)";this.c.setAttribute("style","position:fixed;z-index:-1;top:0;left:0;right:0;bottom:0;width:100%;height:100%;-webkit-transform:"+e+";transform:"+e+";outline: 1px solid transparent;background-color:rgba("+this.bc.r+","+this.bc.g+","+this.bc.b+",1);")},h.prototype.init=function(t){this.o=t,this.bc=s(this.o.colors.background),this.ps=[],this.resize(),this.cp()},h.prototype.cp=function(){var i=0;this.ps=[],this.o.ac=t.innerWidth<600&&this.o.count>5?Math.round(this.o.count/2):this.o.count;for(var s=0;s<this.o.ac;s++){var h=s%4,a=new e(this.o.colors.particles[i],h,this.o);++i>=this.o.colors.particles.length&&(i=0),this.ps[s]=a}},h.prototype.an=function(){t.requestAnimationFrame(this.an.bind(this)),this.x.clearRect(0,0,this.o.c.w,this.o.c.h);for(var i=0;i<this.o.ac;i++){this.ps[i].an(this.x,this.o.c.w,this.o.c.h)}},h}();t.FinisherHeader=h})(window);
    }

    // Create fullscreen container style
    const createFullscreenStyle = () => {
      // Remove any existing style element
      const existingStyle = document.getElementById('fullscreen-finisher-style');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
      
      // Create style element
      const styleElement = document.createElement('style');
      styleElement.id = 'fullscreen-finisher-style';
      styleElement.textContent = `
        .${className} {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: -1 !important;
          overflow: hidden !important;
        }
        
        #finisher-canvas {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: -1 !important;
        }
      `;
      
      document.head.appendChild(styleElement);
    };
    
    // Apply fullscreen styles
    createFullscreenStyle();

    // Create instance with provided props
    if (headerRef.current) {
      // Clear any existing canvases
      const existingCanvas = headerRef.current.querySelector('#finisher-canvas');
      if (existingCanvas) {
        headerRef.current.removeChild(existingCanvas);
      }

      // Initialize with our configuration
      try {
        new window.FinisherHeader({
          count,
          size,
          speed,
          colors,
          blending,
          opacity,
          skew,
          shapes,
          className
        });
      } catch (error) {
        console.error('Error initializing FinisherHeader:', error);
      }
    }

    return () => {
      // Clean up styles and canvas
      const styleElement = document.getElementById('fullscreen-finisher-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
      
      const existingCanvas = document.getElementById('finisher-canvas');
      if (existingCanvas && existingCanvas.parentNode) {
        existingCanvas.parentNode.removeChild(existingCanvas);
      }
    };
  }, [count, size, speed, colors, blending, opacity, skew, shapes, className]);

  return (
    <div 
      ref={headerRef} 
      className={className} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1,
        overflow: 'hidden'
      }}
    />
  );
};

export default Entire_BG;