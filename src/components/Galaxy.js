import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CanvasStyle = {
  height: '100%',
  margin: '0',
  padding: '0',
  width: '100%',
};

const Controls = () => {
  const orbitRef = useRef();

  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />;
};

const Star = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry attach='geometry' args={[0.2, 32, 16]} />
      <meshStandardMaterial
        attach='material'
        color={(Math.floor(Math.random() * 2) + 1) % 2 === 0 ? 'lightblue' : 'white'}
      />
    </mesh>
  );
};

const Galaxy = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const randomStarPosition = () => {
      var random = [
        Math.floor(Math.random() * 200) - 100,
        Math.floor(Math.random() * 200) - 100,
        Math.floor(Math.random() * 200) - 100,
      ];
      setStars((stars) => [...stars, random]);
    };
    for (let i = 0; i < 300; i++) {
      randomStarPosition();
    }
  }, []);

  return (
    <Canvas
      style={CanvasStyle}
      camera={{ position: [70, 5, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}>
      <Controls />
      <ambientLight />
      {stars.map((star, index) => (
        <Star key={index} position={[star[0], star[1], star[2]]} />
      ))}
    </Canvas>
  );
};

export default Galaxy;
