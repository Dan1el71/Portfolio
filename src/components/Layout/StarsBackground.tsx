import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const StarsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let stars: THREE.Points
    let isScrolling = false
    let previousHeight = 0
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const init = () => {
      scene = new THREE.Scene()

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 5

      renderer = new THREE.WebGLRenderer()
      renderer.setSize(sizes.width, sizes.height)
      containerRef.current?.appendChild(renderer.domElement)

      const geometry = new THREE.BufferGeometry()
      const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 })

      const vertices = []
      for (let i = 0; i < 4000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = (Math.random() - 0.5) * 2000
        vertices.push(x, y, z)
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      )
      stars = new THREE.Points(geometry, material)
      scene.add(stars)

      const animate = () => {
        requestAnimationFrame(animate)
        stars.rotation.x += 0.0004
        stars.rotation.y += 0
        stars.rotation.z += 0
        renderer.render(scene, camera)
      }

      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true

          const currentHeight = window.scrollY + window.innerHeight

          if (currentHeight > previousHeight) {
            previousHeight = currentHeight

            sizes.width = window.innerWidth
            sizes.height = currentHeight

            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            renderer.render(scene, camera)
          }

          setTimeout(() => {
            isScrolling = false
          }, 16)
        }
      }

      window.addEventListener('scroll', handleScroll)
      animate()

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    init()
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full z-[-2] bg-black pointer-events-none"
    />
  )
}

export default StarsBackground
