import React, { useEffect, Suspense } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import gsap, { getUnit } from "gsap";

import {
  galaxyColors,
  generateGalaxy,
  galaxy1Params,
  galaxy2Params,
  galaxy3Params,
} from "./galaxies";
// import { OctoA } from './models/Octopus'
import NomadModel from "./models/CarbonNomad";
import SeedLogo from "../img/assets/textures/particles/seed_logo.png";
import BabyOctoImg from "../static/assets/textures/baby_octo_alpha_0001.png";
import BabyOctoAlpha from "../static/assets/textures/baby_octo_alpha_map.png";

export const Canvas = (toggleAnim) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = document.querySelector("canvas.webgl");
      const logo = document.querySelector(".mf-logo");

      // Scene
      const scene = new THREE.Scene();
      const sectionOne = new THREE.Group();
      const sectionTwo = new THREE.Group();
      const sectionThree = new THREE.Group();
      const sectionFour = new THREE.Group();

      const nomadModel = new THREE.Group();
      scene.add(nomadModel);

      console.log(NomadModel);

      /**
       * Colors
       */
      const count = 20;
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        // positions[i] = (Math.random() - 0.5) * 10
        colors[i] = Math.random();
      }

      /**
       * Textures
       */
      const textureLoader = new THREE.TextureLoader();
      const babyOctoColorTexture = textureLoader.load(BabyOctoImg);
      const babyOctoAlphaTexture = textureLoader.load(BabyOctoAlpha);
      babyOctoAlphaTexture.minFilter = THREE.NearestFilter;
      babyOctoAlphaTexture.magFilter = THREE.NearestFilter;
      babyOctoAlphaTexture.generateMipmaps = true;

      const planeColorTexture = textureLoader.load(SeedLogo);
      const planeAlphaTexture = textureLoader.load(SeedLogo);
      /**
       * Models
       */

      // // Animation mixer
      let mixer = null;

      /**
       * Objects
       */
      const objectsDistance = 4;

      const particleTexture = textureLoader.load(SeedLogo);

      const babyOctoGeometry = new THREE.PlaneGeometry(1, 1, 1);
      const babyOctoMaterial = new THREE.MeshBasicMaterial({
        map: babyOctoColorTexture,
        alphaMap: babyOctoAlphaTexture,
        sizeAttenuation: true,
        transparent: true,
      });

      const planeGeometry = new THREE.PlaneGeometry(1, 1, 1);
      const planeMaterial = new THREE.PointsMaterial();
      planeMaterial.transparent = true;
      planeMaterial.map = planeColorTexture;
      planeMaterial.alphaMap = planeAlphaTexture;

      const plane1 = new THREE.Mesh(babyOctoGeometry, babyOctoMaterial);
      const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
      const plane3 = new THREE.Mesh(babyOctoGeometry, babyOctoMaterial);

      plane1.geometry.center();
      plane1.position.x = 0;
      plane1.position.y = 0;
      sectionOne.add(plane1);
      plane3.geometry.center();
      plane3.position.x = 0;
      plane3.position.y = 0;
      // sectionFour.add(plane3);

      sectionTwo.add(plane2);
      // Galaxies
      const galaxy1 = generateGalaxy(galaxy1Params);
      const galaxy2 = generateGalaxy(galaxy2Params);
      const galaxy3 = generateGalaxy(galaxy3Params);

      galaxy1.position.x = 6;
      galaxy1.position.y = 0;
      galaxy1.position.z = -13;

      galaxy1.rotation.x = 4.8;
      galaxy1.rotation.y = 4.15;
      galaxy1.rotation.z = 4.75;

      galaxy2.position.x = -12;
      galaxy2.position.y = 25;
      galaxy2.position.z = -20;
      // galaxy2.rotation.z = 0.01
      galaxy2.rotation.x = 1.3;
      // galaxy2.rotation.z= 1.3;

      galaxy3.position.x = 3;
      galaxy3.position.y = 1;
      galaxy3.position.z = 5;

      sectionOne.add(galaxy1);
      sectionTwo.add(galaxy2);
      sectionThree.add(galaxy3);
      // sectionFour.add(galaxy3);

      sectionOne.position.x = 0;
      sectionOne.position.y = -objectsDistance * 0;
      sectionTwo.position.x = 0;
      sectionTwo.position.y = -objectsDistance * 1;
      sectionThree.position.x = 0;
      sectionThree.position.y = -objectsDistance * 2;
      sectionFour.position.x = -1;
      sectionFour.position.y = -objectsDistance * 4;

      scene.add(sectionOne, sectionTwo, sectionThree, sectionFour);

      const galaxies = [galaxy1, galaxy2, galaxy3];
      // scene.add(planet1Group)
      galaxy1.geometry.center();
      galaxy2.geometry.center();
      galaxy3.geometry.center();
      // galaxy2.scale.set(0.5, 0.5, 0.5)
      galaxy3.scale.set(1.5, 1.5, 1.5);
      // sectionTwo.scale.set(0.5, 0.5, 0.5)

      /**
       * Particles
       */
      const parameters = {
        materialColor: galaxyColors.inside,
        particleColor: "#fff",
      };
      const particlesCount = 25000;
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3 + 0] = (Math.random() - 0.5) * 40;
        positions[i3 + 1] =
          objectsDistance * 0.8 -
          Math.random() * objectsDistance * (galaxies.length * 2);
        positions[i3 + 2] = (Math.random() - 0.5) * 40;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      // Material
      const particlesMaterial = new THREE.PointsMaterial({
        map: particleTexture,
        alphaMap: particleTexture,
        color: parameters.particleColor,
        transparent: true,
        sizeAttenuation: true,
        size: 0.03,
      });

      // Points
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // Easter eggs
      const easterEgg1 = document.querySelectorAll(".ee1");

      /**
       * Sizes
       */
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      /**
       * Camera
       */
      // Camera group
      const cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      // Base camera
      const camera = new THREE.PerspectiveCamera(
        50,
        sizes.width / sizes.height,
        0.1,
        400
      );
      camera.position.z = 6;
      cameraGroup.add(camera);

      // Controls
      // const controls = new OrbitControls(camera, canvas)
      // controls.enableDamping = true

      /**
       * Lights
       */
      const spotLight = new THREE.PointLight("#ffd700", 1, 300, 1);
      spotLight.position.x = galaxy1.position.x;
      spotLight.position.z = galaxy1.position.z;
      spotLight.position.y = galaxy1.position.y;
      // spotLight.rotation.y = 0.25
      scene.add(spotLight);
      spotLight.lookAt(camera.position);
      const sphereSize = 1;
      const pointLightHelper = new THREE.PointLightHelper(
        spotLight,
        sphereSize
      );
      // scene.add( pointLightHelper );

      const glowLight = new THREE.PointLight("#fff", 2, 500);
      glowLight.position.x = -2;
      glowLight.position.y = 0;
      glowLight.position.z = 10;
      // scene.add(glowLight)

      const glowLightHelper = new THREE.PointLightHelper(glowLight, sphereSize);
      // scene.add(glowLightHelper)

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      /**
       * Scroll
       */
      let scrollY = window.scrollY;
      let currentSection = 0;

      window.addEventListener("scroll", () => {
        scrollY = window.scrollY;

        const newSection = Math.round(scrollY / sizes.height);

        if (newSection !== currentSection) {
          currentSection = newSection;
          console.log(currentSection);
          if (toggleAnim) {

            switch (currentSection) {
              case 0:
                gsap.to(cameraGroup.rotation, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: "0",
                  x: "0",
                  z: "0",
                });
                gsap.to(cameraGroup.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  z: 0,
                });
                gsap.to(galaxy1.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 6,
                  y: 0,
                  z: -13,
                });
                gsap.to(galaxy2.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: 25,
                });
                gsap.to(plane1.position, {
                  duration: 3,
                  ease: "power2.inOut",
                  x: -8,
                  y: -3,
                  z: -4,
                });
                gsap.to(plane1.rotation, {
                  duration: 3,
                  ease: "power2.inOut",
                  x: 0,
                });
                break;

              // Schedule
              case 1:
                gsap.to(cameraGroup.rotation, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: "0.33",
                  z: "0",
                });
                gsap.to(cameraGroup.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  z: -10,
                });
                gsap.to(galaxy1.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 5,
                  z: -15,
                });
                gsap.to(galaxy2.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: -18,
                });
                gsap.to(plane1.position, {
                  duration: 3,
                  ease: "power2.inOut",
                  x: 5,
                  y: -2,
                  z: -10,
                });
                break;

              case 2:
                gsap.to(cameraGroup.rotation, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: "-0.90",
                  x: "0.10",
                  z: "0",
                });
                gsap.to(cameraGroup.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  z: 0,
                });
                gsap.to(galaxy1.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 5,
                  z: 10,
                });
                gsap.to(galaxy2.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: 1,
                  z: 10,
                });
                gsap.to(galaxy3.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 1,
                  y: 1,
                  z: 3,
                });
                gsap.to(plane1.position, {
                  duration: 3,
                  ease: "power2.inOut",
                  x: 25,
                  y: 3,
                  z: -15,
                });
                break;

              case 3:
                gsap.to(cameraGroup.rotation, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: "0.03",
                  x: "0.25",
                  z: "-0.2",
                });
                gsap.to(cameraGroup.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  z: -2,
                });
                gsap.to(galaxy1.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 3,
                  z: 10,
                });
                gsap.to(galaxy2.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: -10,
                  y: 1,
                  z: -10,
                });
                break;

              case 4:
                gsap.to(cameraGroup.rotation, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: "2.8",
                  x: "-.95",
                  z: "0.4",
                });
                gsap.to(cameraGroup.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  z: -2,
                });
                gsap.to(galaxy1.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 0,
                  y: 0,
                  z: -13,
                });
                gsap.to(galaxy2.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: -14,
                  y: 3,
                  z: 5,
                });
                gsap.to(plane1.position, {
                  duration: 3,
                  ease: "power2.inOut",
                  x: -26,
                  y: 20,
                  z: -5,
                });
                break;

              case 5:
                gsap.to(cameraGroup.rotation, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: "2.8",
                  x: "-.95",
                  z: "0.4",
                });
                gsap.to(cameraGroup.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  z: -2,
                });
                gsap.to(galaxy1.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 0,
                  y: 0,
                  z: -13,
                });
                gsap.to(galaxy2.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: -8,
                  y: 1,
                  z: 5,
                });
                gsap.to(plane1.position, {
                  duration: 3,
                  ease: "power2.inOut",
                  x: 0,
                  y: 0,
                  z: 0,
                });
                break;

              default:
                gsap.to(cameraGroup.rotation, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  y: "-.60",
                  x: "0",
                  z: "0",
                });
                gsap.to(cameraGroup.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  z: 0,
                });
                gsap.to(galaxy1.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: 3,
                  y: 0,
                  z: -13,
                });
                gsap.to(galaxy2.position, {
                  duration: 1.5,
                  ease: "power2.inOut",
                  x: -12,
                  y: 20,
                  z: -20,
                });
                gsap.to(plane1.position, {
                  duration: 3,
                  ease: "power2.inOut",
                  x: -26,
                  y: 20,
                  z: 0,
                });
                break;
            }
          }
        }
      });

      /**
       * Raycaster
       */
      const raycaster = new THREE.Raycaster();
      let currentIntersect = null;

      /**
       * Hover
       */
      //  window.addEventListener("mouseenter", () => {
      //   if (currentIntersect) {
      //     if (currentIntersect.object === plane1) {
      //       document.querySelector('html').style.cursor = 'crosshair'

      //     } else if (currentIntersect.object === plane2) {
      //       console.log("2 clicked");

      //     }
      //   }
      // });
      window.addEventListener("click", () => {
        console.log("click click");
        if (currentIntersect) {
          if (currentIntersect.object === plane1) {
            easterEgg1[0].classList.toggle('found')
            console.log(easterEgg1);

          } else if (currentIntersect.object === plane2) {
            console.log("2 clicked");

          }
        }
      });


      /**
       * Cursor / Mouse
       */
      const cursor = {};
      cursor.x = 0;
      cursor.y = 0;
      const mouse = new THREE.Vector2()

      window.addEventListener("mousemove", (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;

        mouse.x = event.clientX / sizes.width * 2 - 1;
        mouse.y = -(event.clientY / sizes.height) * 2 + 1
      });



      /**
       * Animate
       */
      const clock = new THREE.Clock();
      let previousTime = 0;

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        const galaxy2Angle = elapsedTime * 0.3;
        const parallaxX = cursor.x * 0.5;
        const parallaxY = cursor.y * 0.5;
        // if (toggleAnim) {
          // Animate camera
          camera.position.y = (-scrollY / sizes.height) * objectsDistance;
          cameraGroup.position.x +=
            (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
          cameraGroup.position.y +=
            (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

          for (const galaxy of galaxies) {
            // galaxy.rotation.y += deltaTime * 0.1
          }

          galaxy1.position.y = -scrollY * 0.0005;
          // galaxy1.rotation.y += (parallaxX - cameraGroup.position.x) * 2 * deltaTime
          galaxy1.rotation.z = scrollY * 0.0004;
          galaxy1.rotation.x = -elapsedTime * 0.006;

          galaxy2.rotation.y = -elapsedTime * 0.05;

          galaxy3.rotation.y = -elapsedTime * 0.006;

          plane1.position.x = -3.5 + Math.sin(elapsedTime * 0.9) * Math.PI * 0.05;
          plane1.position.y = -1.5 - Math.cos(elapsedTime * 0.1) * Math.PI * 0.5;
          plane1.rotation.z = -elapsedTime * 0.06;

          particles.position.y = scrollY * 0.0004;
          particles.rotation.y = Math.cos(elapsedTime * 0.05) * Math.PI * 0.05;

          // Cast ray
          raycaster.setFromCamera(mouse, camera);

          const objectsToTest = [plane1, plane2];
          const intersects = raycaster.intersectObjects(objectsToTest);
          // console.log(intersects);

          for (const object of objectsToTest) {
          }
          for (const intersect of intersects) {
          }

          if (intersects.length) {
            console.log("Something is being hovered");
            if (currentIntersect === null) {
              console.log("mouse enter");
            }

            currentIntersect = intersects[0];
          } else {
            if (currentIntersect) {
              console.log("mouse leave");
              // easterEgg1.classList.remove('found')
            }
            currentIntersect = null;
          }
          // Update animations mixer
          if (mixer) {
            mixer.update(deltaTime);
          }

          // Render
          renderer.render(scene, camera);

          // Call tick again on the next frame
          window.requestAnimationFrame(tick);
        // }

      };
       tick();
    }
  }, []);

  return (
    <Suspense>
      <canvas className="webgl"></canvas>
    </Suspense>
  )
};