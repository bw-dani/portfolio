import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { ShaderMaterial } from 'three';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshStandardMaterial } from "three";
import { MeshPhysicalMaterial } from "three";

import { ClearCoatMaterial } from "three";
import model from "./3DModel/ringtone/model.gltf";
import "./Header.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Header(props) {
  const headerContent = useRef(null);
  const containerRef = useRef(null);

  // const modelUrl = `./3DModel/ringtone/scene.gltf?v=${Date.now()}`

  useEffect(() => {
    gsap.to(headerContent.current, {
      scrollTrigger: {
        trigger: headerContent.current,
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        // markers: true
      },
    });
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;

    containerRef.current.appendChild(renderer.domElement);
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envMap = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;
    pmremGenerator.dispose();

    camera.position.y = 60;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');
    // loader.setDRACOLoader(dracoLoader);

    loader.load(model, (gltf) => {
      console.log('gltf', gltf.material);

      // const materials = gltf.parser.json.materials[0];
      // for (let i = 0; i < materials.length; i++) {
      //   const material = materials[i];
      //   console.log('material', material);
      // }


      const iridescence = gltf.parser.json.materials[0].extensions.KHR_materials_iridescence;
      console.log('iridescence', iridescence);

      if (iridescence) {
        const iridescenceMap = new THREE.ShaderMaterial({
          uniforms: {
            iridescenceFactor: { value: iridescence.iridescenceFactor },
            iridescenceIor: { value: iridescence.iridescenceIor },
            iridescenceThicknessMinimum: { value: iridescence.iridescenceThicknessMinimum },
            iridescenceThicknessMaximum: { value: iridescence.iridescenceThicknessMaximum },
          }
        });
      
        // console.log('iridescenceMap', iridescenceMap);

        const clearCoat = gltf.parser.json.materials[0].extensions.KHR_materials_clearcoat;
        console.log('clearCoat', clearCoat);

        const clearCoatMap = new THREE.ShaderMaterial({
          uniforms: {
            clearcoatFactor: { value: clearCoat.clearcoatFactor },
            clearcoatRoughnessFactor: { value: clearCoat.clearcoatRoughnessFactor },
          }
        });

        const pbrMetallicRoughness = gltf.parser.json.materials[0].pbrMetallicRoughness;
        console.log('pbrMetallicRoughness', pbrMetallicRoughness);

        const pbrMetallicRoughnessMap = new THREE.ShaderMaterial({
          uniforms: {
            baseColorFactor: { value: pbrMetallicRoughness.baseColorFactor },
            metallicFactor: { value: pbrMetallicRoughness.metallicFactor },
            roughnessFactor: { value: pbrMetallicRoughness.roughnessFactor },
          }
        });


      gltf.scene.traverse((child) => {
        gltf.scene.scale.set(3, 3, 3);
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = iridescenceMap && clearCoatMap && pbrMetallicRoughnessMap ? new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 1,
            roughness: 0.1,
            envMap: envMap,
            envMapIntensity: 1,
            
            clearcoat: clearCoatMap.uniforms.clearcoatFactor.value,
            clearcoatRoughness: clearCoatMap.uniforms.clearcoatRoughnessFactor.value,

            iridescence: iridescenceMap.uniforms.iridescenceFactor.value,
            iridescenceIOR: iridescenceMap.uniforms.iridescenceIor.value,
            iridescenceThicknessMin: iridescenceMap.uniforms.iridescenceThicknessMinimum.value,
            iridescenceThicknessMax: iridescenceMap.uniforms.iridescenceThicknessMaximum.value,
          }) : new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 1,
            roughness: 0.1,
            envMap: envMap,
            envMapIntensity: 1,
          });

          child.layers.enable(1);
          child.layers.enable(2);
          child.animations = gltf.animations;
          child.mixer = new THREE.AnimationMixer(child);
          child.mixer.clipAction(child.animations[0]).play();
        }

      });
      console.log(gltf.scene);
      console.log(gltf.materials);


      scene.add(gltf.scene);
        console.log(gltf);
      }
    });

    console.log('log',scene);

    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);

      scene.traverse((child) => {
        if (child.isMesh && child.mixer) {
          child.mixer.update(0.01);
        }
      }
      );
  
    };
    render();
  }, []);

  return (
    <div className="header" ref={containerRef}>
      <div className="header-content" ref={headerContent}>
        <span className="header-span"></span>
        <h1 className="header-title">DEVELOPER</h1>
        <p className="header-subtitle">
          Building websites with a passion for clean design, user experience,
          and modern technologies
        </p>
      </div>
    </div>
  );
}
