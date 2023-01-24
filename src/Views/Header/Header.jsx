import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { MeshPhysicalMaterial } from "three";
import model from "./3DModel/ringtone/model.gltf";
import "./Header.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Header(props) {
  const headerContent = useRef(null);
  const containerRef = useRef(null);

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
    const envMap = pmremGenerator.fromScene(new RoomEnvironment()).texture;
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
    controls.update();

    const loader = new GLTFLoader();
    loader.load(model, (gltf) => {

      // Shaders and materials
      const iridescenceShader = gltf.parser.json.materials[0].extensions.KHR_materials_iridescence;
      const clearCoatShader = gltf.parser.json.materials[0].extensions.KHR_materials_clearcoat;
      const emissiveShader = gltf.parser.json.materials[0].emissiveFactor;
      const pbrMetallicRoughness = gltf.parser.json.materials[0].pbrMetallicRoughness;

      gltf.scene.traverse((child) => {
        gltf.scene.scale.set(2.5, 2.5, 2.5);
        gltf.material = new MeshPhysicalMaterial({
          color: new THREE.Color(pbrMetallicRoughness.baseColorFactor),
          metalness: pbrMetallicRoughness.metallicFactor,
          roughness: pbrMetallicRoughness.roughnessFactor,
          emissive: emissiveShader,
          _clearcoat: {
            clearcoat: clearCoatShader.clearcoatFactor,
            clearcoatRoughness: clearCoatShader.clearcoatRoughnessFactor,
          },
          _iridescence: {
            iridescence: iridescenceShader.iridescenceFactor,
            iridescenceIOR: iridescenceShader.iridescenceIor,
            thickness: iridescenceShader.iridescenceThicknessMaximum,
          },
          sheenColor: pbrMetallicRoughness.baseColorFactor,
          _sheen: {
            color: pbrMetallicRoughness.baseColorFactor,
            roughness: 0,
          },
          reflectivity: 3,
          attenuationColor: new THREE.Color(0xffffff),
          attenuationDistance: 0.5,
          clipShadows: true,
          envMap: envMap,
          envMapIntensity: 1,
        });

        //scroll rotation
        const initialRotation = Math.PI / 1;
        gltf.scene.rotation.x = initialRotation;
        let lastScrollTop = 0;
        let currentPosition = initialRotation;

        window.addEventListener("scroll", () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            currentPosition -= 0.035;
            gltf.scene.rotation.x = currentPosition;
          } else {
            currentPosition += 0.035;
            if (currentPosition < initialRotation) {
              currentPosition = initialRotation;
            }
            gltf.scene.rotation.x = currentPosition;
          }
          if (scrollTop === 0) {
            gltf.scene.rotation.x = initialRotation;
            lastScrollTop = scrollTop;
          }
        });

        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = false;
          child.layers.enableAll();
          child.animations = gltf.animations;
          child.mixer = new THREE.AnimationMixer(child);
          child.mixer.clipAction(child.animations[0]).play();
        }
      });
      scene.add(gltf.scene);
    });

    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      scene.traverse((child) => {
        if (child.isMesh && child.mixer) {
          child.mixer.update(0.01);
        }
      });
    };
    render();
  }, []);

  return (
    <div className="header" ref={containerRef}>
      <div className="header-content" ref={headerContent}>
        <span className="header-span"></span>
        <h1 className="header-title">DEVELOPER</h1>
        <p className="header-subtitle">Building websites with a passion for clean design, user experience, and modern technologies</p>
      </div>
    </div>
  );
}
