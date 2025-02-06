"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { motion, useScroll, useTransform } from "framer-motion"

export default function GlobeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<THREE.Mesh>()
  const particlesRef = useRef<THREE.Points>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const sceneRef = useRef<THREE.Scene>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const rotationProgress = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Earth setup
    const geometry = new THREE.SphereGeometry(1.5, 64, 64)
    const textureLoader = new THREE.TextureLoader()

    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load("/earth-map.jpg"),
      bumpMap: textureLoader.load("/earth-bump.jpg"),
      bumpScale: 0.05,
      specularMap: textureLoader.load("/earth-specular.jpg"),
      specular: new THREE.Color("grey"),
      shininess: 5,
    })

    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)
    globeRef.current = globe

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.55, 64, 64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    })

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: "#ffffff",
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 3, 5)
    scene.add(pointLight)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      if (globeRef.current && particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005
      }
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      renderer.dispose()
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  useEffect(() => {
    return rotationProgress.onChange((value) => {
      if (globeRef.current) {
        globeRef.current.rotation.y = value
      }
    })
  }, [rotationProgress])

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div ref={containerRef} className="absolute inset-0">
        {/* Three.js canvas will be injected here */}
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-white text-center font-['Times_New_Roman'] max-w-5xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BlockNinja combines the two most
          <br />
          powerful trading products on Solana.
        </motion.h2>
      </div>
    </div>
  )
}

