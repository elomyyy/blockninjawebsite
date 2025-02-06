"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const sceneRef = useRef<THREE.Scene>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const pointsRef = useRef<THREE.Points>()
  const linesRef = useRef<THREE.LineSegments>()
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Particles setup
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 200
    const positions = new Float32Array(particlesCount * 3)
    const opacities = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      opacities[i] = Math.random()
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1))

    const particlesMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        attribute float opacity;
        varying float vOpacity;
        
        void main() {
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = 2.0;
        }
      `,
      fragmentShader: `
        varying float vOpacity;
        
        void main() {
          float opacity = vOpacity * 0.5;
          gl_FragColor = vec4(1.0, 1.0, 1.0, opacity);
        }
      `,
    })

    const points = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(points)
    pointsRef.current = points

    // Lines setup
    const linesGeometry = new THREE.BufferGeometry()
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.1,
    })

    const lines = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(lines)
    linesRef.current = lines

    // Animation
    const animate = (time: number) => {
      frameRef.current = requestAnimationFrame(animate)

      if (pointsRef.current && linesRef.current) {
        // Update particles
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
        const opacities = pointsRef.current.geometry.attributes.opacity.array as Float32Array

        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(time * 0.001 + i) * 0.001
          opacities[i / 3] = Math.abs(Math.sin(time * 0.001 + i))
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true
        pointsRef.current.geometry.attributes.opacity.needsUpdate = true

        // Update lines
        const linePositions: number[] = []
        for (let i = 0; i < positions.length; i += 3) {
          const x1 = positions[i]
          const y1 = positions[i + 1]
          const z1 = positions[i + 2]

          for (let j = i + 3; j < positions.length; j += 3) {
            const x2 = positions[j]
            const y2 = positions[j + 1]
            const z2 = positions[j + 2]

            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2))

            if (distance < 2) {
              linePositions.push(x1, y1, z1)
              linePositions.push(x2, y2, z2)
            }
          }
        }

        linesRef.current.geometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3))
      }

      renderer.render(scene, camera)
    }

    animate(0)

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return

      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} />
}

