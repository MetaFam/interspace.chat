import React, { useEffect } from "react";
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import gsap, { getUnit } from 'gsap'
import { galaxyColors, generateGalaxy, galaxy1Params, galaxy2Params, galaxy3Params } from './galaxies'
// import { octo } from './components/models'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import UEFlag from '../img/assets/textures/particles/ukraine-flag-xl.png'
import SeedLogo from '../img/assets/textures/particles/seed_logo.png'
import PlanetTexture from '../img/assets/textures/planet_disp.png'


export const Canvas = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = document.querySelector('canvas.webgl')

      // Scene
      const scene = new THREE.Scene()

      /**
       * Colors
       */
      const count = 20
      const colors = new Float32Array(count * 3)
      for (let i = 0; i < count * 3; i++) {
          // positions[i] = (Math.random() - 0.5) * 10
          colors[i] = Math.random()
      }

      /**
       * Models
       */
      // Octo
      const octoModel = new THREE.Group()
      scene.add(octoModel)
      // octoModel.geometry.center()

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
              const action = mixer.clipAction(gltf.animations[0])
              // action.play()

              // Set the scale
              gltf.scene.scale.set(3, 3, 3)
              // gltf.scene.rotation.set(Math.PI, Math.PI * 0.01, Math.PI * 0.65)
              gltf.scene.rotation.set(Math.PI * 1.15, Math.PI * 1.25, Math.PI * 0.75)

              gltf.scene.position.set(-28, 4, -80)
              // octoModel.add(gltf.scene)
          },
          (progress) => {
              console.log('Progress: ', progress);
          },
          (error) => {
              console.log('Error: ', error);
          }
      )

      /**
       * Objects
       */
      const objectsDistance = 4

      const textureLoader = new THREE.TextureLoader()
      const particleTexture = textureLoader.load(SeedLogo)
      const planetAlphaTexture = textureLoader.load(PlanetTexture)
      // particleTexture.minFilter = THREE.NearestFilter
      // particleTexture.magFilter = THREE.NearestFilter
      // particleTexture.generateMipmaps = false
      planetAlphaTexture.minFilter = THREE.NearestFilter
      planetAlphaTexture.magFilter = THREE.NearestFilter
      planetAlphaTexture.generateMipmaps = false


      const planetGeometry = new THREE.SphereGeometry(1, 64, 32)
      const planetMaterial = new THREE.MeshPhongMaterial({
          color: '#fff',
          map: planetAlphaTexture,
          alphaMap: planetAlphaTexture,
          transparent: true,
          emissive: galaxy2Params.insideColor,
          emissiveIntensity: 1,
          specular: galaxy1Params.insideColor,
          shininess: 0.05,
      })

      const planet1 = new THREE.Mesh(planetGeometry, planetMaterial)
      planet1.scale.set(1, 1, 1)
      // scene.add(planet1)

      const planet1Group = new THREE.Group()
      planet1Group.add(planet1)


      // Galaxies
      const galaxy1 = generateGalaxy(galaxy1Params)
      const galaxy2 = generateGalaxy(galaxy2Params)
      const galaxy3 = generateGalaxy(galaxy3Params)
      console.log(galaxy1);
      galaxy1.position.x = 4
      planet1.position.x = galaxy2.position.x
      planet1.position.y = galaxy2.position.y
      planet1.position.z = galaxy2.position.z
      planet1Group.position.x = -25
      // galaxy3.position.x = 4

      galaxy1.position.y = - objectsDistance * 0
      // galaxy2.position.y = objectsDistance * 20
      // galaxy3.position.y = - objectsDistance * 2

      galaxy1.position.z = -15
      planet1Group.position.z = -50
      // galaxy3.position.z = -20

      galaxy1.rotation.x = 4.8
      galaxy1.rotation.y = 4.15
      galaxy1.rotation.z = 4.75
      // galaxy2.rotation.z = 0.01
      galaxy2.rotation.x = 2
      planet1Group.add(galaxy2)
      scene.add(galaxy1)
      const galaxies = [galaxy1, galaxy2, galaxy3]
      // scene.add(planet1Group)
      planet1.geometry.center()
      galaxy2.geometry.center()
      /**
       * Particles
       */
       const parameters = {
          materialColor: galaxyColors.inside,
          particleColor: '#fff'
      }
      const particlesCount = 2000
      const positions = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount; i++) {
          const i3 = i * 3
          positions[i3 + 0] = (Math.random() - 0.5) * 10
          positions[i3 + 1] = objectsDistance * 0.4 - Math.random() * objectsDistance * (galaxies.length * 2)
          positions[i3 + 2] = (Math.random() - 0.5) * 10
      }

      const particlesGeometry = new THREE.BufferGeometry()
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      // Material
      const particlesMaterial = new THREE.PointsMaterial({
          map: particleTexture,
          alphaMap: particleTexture,
          color: parameters.particleColor,
          transparent: true,
          sizeAttenuation: true,
          size: 0.03
      })

      // Points
      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)


      /**
       * Sizes
       */
      const sizes = {
          width: window.innerWidth,
          height: window.innerHeight
      }

      window.addEventListener('resize', () =>
      {
          // Update sizes
          sizes.width = window.innerWidth
          sizes.height = window.innerHeight

          // Update camera
          camera.aspect = sizes.width / sizes.height
          camera.updateProjectionMatrix()

          // Update renderer
          renderer.setSize(sizes.width, sizes.height)
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      })

      /**
       * Camera
       */
      // Camera group
      const cameraGroup = new THREE.Group()
      scene.add(cameraGroup)

      // Base camera
      const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 200)
      camera.position.z = 6
      cameraGroup.add(camera)

      // Controls
      // const controls = new OrbitControls(camera, canvas)
      // controls.enableDamping = true

      /**
       * Lights
       */
      const spotLight = new THREE.PointLight('#ffd700', 1, 300, 1)
      spotLight.position.x = galaxy1.position.x
      spotLight.position.z = galaxy1.position.z
      spotLight.position.y = galaxy1.position.y
      // spotLight.rotation.y = 0.25
      scene.add(spotLight)
      spotLight.lookAt(camera.position)
      const sphereSize = 1;
      const pointLightHelper = new THREE.PointLightHelper( spotLight, sphereSize );
      // scene.add( pointLightHelper );

      const glowLight = new THREE.PointLight('#fff', 2, 500)
      glowLight.position.x = -2
      glowLight.position.y = 0
      glowLight.position.z = 10
      // scene.add(glowLight)

      const glowLightHelper = new THREE.PointLightHelper(glowLight, sphereSize);
      // scene.add(glowLightHelper)

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          alpha: true
      })
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      /**
       * Scroll
       */
      let scrollY = window.scrollY
      let currentSection = 0

      window.addEventListener('scroll', () => {
          scrollY = window.scrollY

          const newSection = Math.round(scrollY / sizes.height)

          if (newSection !== currentSection) {
              currentSection = newSection
              // console.log(currentSection);

              // switch (currentSection) {
              //     case 0:
              //         gsap.to(
              //             cameraGroup.rotation,
              //             {
              //                 duration: 1.5,
              //                 ease: 'power2.inOut',
              //                 y: '-0.66',
              //                 x: '-=0.5'
              //                 // y: '+=1.3'
              //             }
              //         )
              //         break;
              //     case 1:
              //         gsap.to(
              //             cameraGroup.rotation,
              //             {
              //                     duration: 1.5,
              //                     ease: 'power2.inOut',
              //                     y: '0.33',

              //                 // y: '+=4.33'
              //             }
              //         )
              //         break;

              //     case 2:
              //         gsap.to(
              //             cameraGroup.rotation,
              //             {
              //                 duration: 1.5,
              //                 ease: 'power2.inOut',
              //                 y: '+=0.33',
              //                 // y: '=3.3',
              //             }
              //         )
              //         break;

              // }
          }
      })

      /**
       * Cursor / Mouse
       */
      const cursor = {}
      cursor.x = 0
      cursor.y = 0

      window.addEventListener('mousemove', (event) => {
          cursor.x = event.clientX / sizes.width - 0.5
          cursor.y = event.clientY / sizes.height - 0.5
      })


      /**
       * Animate
       */
      const clock = new THREE.Clock()
      let previousTime = 0

      const tick = () =>
      {
          const elapsedTime = clock.getElapsedTime()
          const deltaTime = elapsedTime - previousTime
          previousTime = elapsedTime

          const galaxy2Angle = elapsedTime * 0.3
          const parallaxX = cursor.x * 0.5
          const parallaxY = cursor.y * 0.5

          // console.log(deltaTime * 60 * 60);
          // Animate camera
          camera.position.y = -scrollY / sizes.height * objectsDistance
          cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
          cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

          for (const galaxy of galaxies) {
              // galaxy.rotation.y += deltaTime * 0.1
          }

          galaxy1.position.y = -scrollY * 0.0005
          // galaxy1.rotation.y += (parallaxX - cameraGroup.position.x) * 2 * deltaTime
          galaxy1.rotation.x = scrollY * 0.0004

          // galaxy2.position.x = Math.cos(200)
          // galaxy2.position.y = Math.sin(elapsedTime * 0.1) * -50
          // galaxy2.position.z = Math.sin(elapsedTime) * Math.PI * 2

          // galaxy2.rotation.y = - scrollY * 0.0002

          // planet1Group.position.x = Math.cos(elapsedTime * 0.2) * 40
          // planet1Group.position.z = Math.sin(elapsedTime * 0.23) * -50

          // planet1Group.rotation.x = - Math.sin(elapsedTime * 0.05) * Math.PI * 2
          // planet1Group.rotation.y = elapsedTime * 0.5
          // planet1Group.rotation.z = - Math.sin(elapsedTime * 0.05) * Math.PI * 2

          // planet1.rotation.x = - elapsedTime * 0.5

          particles.position.y = scrollY * 0.0004
          // console.log(parallaxX, parallaxY);
          // octoModel.position.x = parallaxX * 3
          // octoModel.position.y = -parallaxY

          // octoModel.rotation.x = -scrollY * 0.0001
          // octoModel.rotation.y += (parallaxX - cameraGroup.position.x) * 0.4 * deltaTime
          // octoModel.rotation.z +=  -(parallaxX - cameraGroup.position.x) * 0.4 * deltaTime
          // octoModel.rotation.z = -parallaxY * 2

          // spotLight.position.x = Math.cos(elapsedTime * 0.2) * 40
          // spotLight.position.z = Math.sin(elapsedTime * 0.23) * -50
          // spotLight.position.y = Math.sin(galaxy2Angle * 2) + (Math.sin(elapsedTime * 0.7))

          // Update animations mixer
          if (mixer) {
              mixer.update(deltaTime)
          }

          // Render
          renderer.render(scene, camera)

          // Call tick again on the next frame
          window.requestAnimationFrame(tick)
      }
      tick()
    }
  }, []);

  return <canvas className="webgl"></canvas>;
};
