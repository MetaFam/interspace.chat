import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/nomad-vox.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.01, 8.78, -0.01]} rotation={[-2.25, 0.1, 2.13]}>
        <directionalLight
          intensity={1}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nomad.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/nomad-vox.glb");