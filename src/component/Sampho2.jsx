import * as THREE from 'three';
import React, { useEffect, useRef } from 'react'
import { useGLTF,useTexture, useVideoTexture } from '@react-three/drei'


function Model2(props) {
  const { nodes, materials } = useGLTF('/models/samsung_galaxy_s24_plus.glb')

  useEffect(() => {
    Object.entries(materials).map((material) => {
      // these are the material names that can't be changed color
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.item.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  const videoTexture = useVideoTexture('/assets/videos/explore.mp4', {
    loop: true,
    muted: true,
    autoplay: true,
    crossOrigin: 'Anonymous',
  });


  useEffect(() => {
    if (videoTexture) {
      const video = videoTexture.image;
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  }, [videoTexture]);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Samsung_S24+001_Base2_0'].geometry}
            material={materials.Base2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Samsung_S24+001_Base_0'].geometry}
            material={materials.Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Samsung_S24+001_Camera_0'].geometry}
            material={materials.Camera}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Samsung_S24+001_Screen_0'].geometry}
            material={materials.Screen}
          >
            <meshStandardMaterial
              map={videoTexture} // Video as the base texture
              transparent={true} // Enable transparency
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Samsung_S24+001_Camera2_0'].geometry}
            material={materials.Camera2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Samsung_S24+001_Flash_0'].geometry}
            material={materials.Flash}
          />
        </group>
      </group>
    </group>
  )
}

export default Model2;
useGLTF.preload('/models/samsung_galaxy_s24_plus.glb')