import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/**
 * Base
 */
// Debug
const debug = new dat.GUI()
/**
 * Models
 */

// Octo
  // Loaders
  const dracoLoader = new DRACOLoader()
  const gltfLoader = new GLTFLoader()

  // Animation mixer
  let mixer = null

  dracoLoader.setDecoderPath('/draco/')
  gltfLoader.setDRACOLoader(dracoLoader)
  gltfLoader.load(
    '/models/OCT_02_fileEXPS.gltf',
    (gltf) => {
      console.log(gltf)

      // Create new mixer
      mixer = new THREE.AnimationMixer(gltf.scene)
      const action = mixer.clipAction(gltf.animations)
      action.play()

      // Set the scale
      gltf.scene.scale.set(0.25, 0.25, 0.25)

    },
    (progress) => {
      console.log('Progress: ', progress);
    },
    (error) => {
      console.log('Error: ', error);
    }
  )
// export const octo = () => {


//     /**
//    * Animate
//    */
//   const clock = new THREE.Clock()
//   let previousTime = 0

//   const tick = () =>
//   {
//       const elapsedTime = clock.getElapsedTime()
//       const deltaTime = elapsedTime - previousTime
//       previousTime = elapsedTime

//       // Update animations mixer
//       if (mixer) {
//           mixer.update(deltaTime)
//       }

//       // Update controls
//       // controls.update()

//       // Render
//       // renderer.render(scene, camera)

//       // Call tick again on the next frame
//       window.requestAnimationFrame(tick)
//   }
//   tick()
//   return gltf

// }

