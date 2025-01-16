import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

const VantaGlobe = () => {
  const vantaRef = useRef(null); // Reference to the DOM element
  let vantaEffect;

  useEffect(() => {
    // Dynamically import VANTA and THREE.js to ensure it's available
    import('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
      .then(() => import('https://unpkg.com/vanta@latest/dist/vanta.globe.min.js'))
      .then(() => {
        vantaEffect = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfcc10f, // Proper color formatting
          backgroundColor: 0x36a9e1,
        });
      });

    // Cleanup Vanta effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{ width: '100%', height: '100vh' }} // Adjust dimensions as needed
    ></div>
  );
};

export default VantaGlobe;
