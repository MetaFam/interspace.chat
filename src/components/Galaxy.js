import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';

const CanvasStyle = {
  height: '100%',
  margin: '0',
  padding: '0',
  width: '100%',
};

const Star = ({ count }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  // The innards of this hook will run every frame
  useFrame((state) => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, speed, xFactor, yFactor, zFactor } = particle;

      // speed of star
      t = particle.t += speed * 7;
      if (t > 100) particle.t = 0;

      let a = (particle.mx / 10) * 0.2 + xFactor;
      let b = (particle.my / 10) * 0.2 + yFactor;
      let c = (particle.my / 10) * 0.2 + zFactor + 2 * t;
      const s = 0.5;
      // Update the dummy object
      dummy.position.set(a, b, c);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereGeometry attach='geometry' args={[0.2, 32, 16]} />
        <meshStandardMaterial
          attach='material'
          color={(Math.floor(Math.random() * 2) + 1) % 2 === 0 ? 'lightblue' : 'white'}
        />
      </instancedMesh>
    </>
  );
};

const Galaxy = () => {
  return (
    <Canvas
      style={CanvasStyle}
      camera={{ fov: 100, position: [0, 0, 30] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}>
      <ambientLight />
      <Star count={2000} />
    </Canvas>
  );
};

export default Galaxy;
