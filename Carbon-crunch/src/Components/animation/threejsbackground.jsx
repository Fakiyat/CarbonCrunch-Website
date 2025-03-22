import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./animationBackground.css";

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Create squares
    const squares = [];
    const squareGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.05);
    const squareMaterial = new THREE.MeshBasicMaterial({
      color: 0x7eef68, // Green color similar to the design
      transparent: true,
      opacity: 0.3,
    });

    // Create grid of squares
    const gridSize = 1.5;
    const gridDimension = 10; // Grid dimension

    for (let i = -gridDimension; i <= gridDimension; i++) {
      for (let j = -gridDimension; j <= gridDimension; j++) {
        const square = new THREE.Mesh(squareGeometry, squareMaterial.clone());
        square.position.x = i * gridSize + (Math.random() * 0.2 - 0.1);
        square.position.y = j * gridSize + (Math.random() * 0.2 - 0.1);
        square.position.z = Math.random() * 0.5 - 0.25;

        // Add animation properties
        square.userData = {
          speed: 0.005 + Math.random() * 0.01,
          amplitude: 0.1 + Math.random() * 0.2,
          initialOpacity: 0.1 + Math.random() * 0.3,
          rotationSpeed: Math.random() * 0.01,
        };

        scene.add(square);
        squares.push(square);
      }
    }

    // Mouse interaction
    const mousePosition = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      squares.forEach((square) => {
        // Pulsating opacity effect
        const { speed, amplitude, initialOpacity, rotationSpeed } =
          square.userData;
        const newOpacity =
          initialOpacity + Math.sin(Date.now() * speed) * amplitude;
        square.material.opacity = newOpacity;

        // Subtle rotation
        square.rotation.x += rotationSpeed;
        square.rotation.y += rotationSpeed * 0.5;

        // Mouse interaction - subtle follow effect
        square.position.x += mousePosition.x * 0.01 - square.position.x * 0.001;
        square.position.y += mousePosition.y * 0.01 - square.position.y * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      squares.forEach((square) => {
        scene.remove(square);
        square.geometry.dispose();
        square.material.dispose();
      });

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="animated-background"></div>;
};

export default AnimatedBackground;
