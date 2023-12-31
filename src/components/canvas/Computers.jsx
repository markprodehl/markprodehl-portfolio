import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import computer from "../../assets/computer.png";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState([]);

  // Optimize the scale and position of the computerCanvas according to screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setScale(.25);
        setPosition([0, 0.1, -0.4]);
      } else if (width <= 600) {
        setScale(0.35);
        setPosition([0, -0.3, -0.55]);
      } else if (width <= 768) {
        setScale(0.35);
        setPosition([0, -0.35, -0.55]);
      } else if (width <= 900) {
        setScale(0.42);
        setPosition([0, -0.45, -0.55]);
      } else if (width <= 1024) {
        setScale(0.48);
        setPosition([0, -0.8, -0.75]);
      } else {
        setScale(0.55);
        setPosition([0, -1, -0.9]);
      }
    };

    // Initial setup
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' /> 
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 380px)' })
  
  return (
    <>
      {/* Displays 3D graphic on newer devices and an animated static image on older ones with smaller views */}
      { isMobile ? (
          <motion.div
            initial={{ x: -9, scale: 0 }} // start from 50 pixels left and no size
            animate={{ x: -9, scale: 1.18 }} // animate to original position and full size
            transition={{ duration: 2 }} // animation duration is 1 second
          >
            <div className="mobile-canvas-container">
              <img src={computer} alt="Static image of computer" /> 
            </div>
          
          </motion.div>
        ) : (
          <div className="canvas-container">
            <Canvas
              frameloop='demand'
              shadows
              dpr={[1, 2]}
              // After adding the handleSize useEffect to manage media queries the isMobile state might not be neccessary anymore. 
              // Keeping the setting for now
              // camera={{ position: [20, 3, 5], fov: isMobile ? 12 : 12 }}
              camera={{ position: [20, 3, 5], fov: 12 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
              </Suspense>

              <Preload all />
            </Canvas>
          </div>
        )
      }

      {/* Displays 3D graphic on desktop and mobile */}
       {/* <div className="canvas-container">
        <Canvas
          frameloop='demand'
          shadows
          dpr={[1, 2]}
          // After adding the handleSize useEffect to manage media queries the isMobile state might not be neccessary anymore. 
          // Keeping the setting for now
          // camera={{ position: [20, 3, 5], fov: isMobile ? 12 : 12 }}
          camera={{ position: [20, 3, 5], fov: 12 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers />
          </Suspense>

          <Preload all />
        </Canvas>
      </div> */}
    </>
  );
};

export default ComputersCanvas;
