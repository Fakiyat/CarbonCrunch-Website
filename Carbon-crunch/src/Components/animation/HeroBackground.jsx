import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./HeroBackground.css";

const HeroBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = Math.min(100, Math.floor(window.innerWidth / 20));
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00b020,
      size: 0.2,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    // Positions array for particles
    const positions = new Float32Array(particlesCount * 3);
    // Velocities array for movement
    const velocities = [];

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // Position particles in a plane
      positions[i3] = (Math.random() - 0.5) * window.innerWidth * 0.05;
      positions[i3 + 1] = (Math.random() - 0.5) * window.innerHeight * 0.05;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;

      // Random velocity for each particle
      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 2)
    );
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create connections between particles
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00b020,
      transparent: true,
      opacity: 0.2,
    });
    const linesGeometry = new THREE.BufferGeometry();
    const connections = [];
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      // Convert mouse position to normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update particles position
      const positions = particlesGeometry.attributes.position.array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Update position with velocity
        positions[i3] += velocities[i].x;
        positions[i3 + 1] += velocities[i].y;
        positions[i3 + 2] += velocities[i].z;

        // Boundary check - wrap around
        if (positions[i3] > 10) positions[i3] = -10;
        if (positions[i3] < -10) positions[i3] = 10;
        if (positions[i3 + 1] > 5) positions[i3 + 1] = -5;
        if (positions[i3 + 1] < -5) positions[i3 + 1] = 5;
        if (positions[i3 + 2] > 5) positions[i3 + 2] = -5;
        if (positions[i3 + 2] < -5) positions[i3 + 2] = 5;
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      // Mouse influence on camera
      camera.position.x += (mouseX * 0.0001 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.0001 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Update connections between particles
      connections.length = 0;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const positionA = new THREE.Vector3(
          positions[i3],
          positions[i3 + 1],
          positions[i3 + 2]
        );

        for (let j = i + 1; j < particlesCount; j++) {
          const j3 = j * 3;
          const positionB = new THREE.Vector3(
            positions[j3],
            positions[j3 + 1],
            positions[j3 + 2]
          );

          const distance = positionA.distanceTo(positionB);

          if (distance < 3) {
            connections.push(positionA.x, positionA.y, positionA.z);
            connections.push(positionB.x, positionB.y, positionB.z);
          }
        }
      }

      linesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(connections, 3)
      );

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="hero-background"></div>;
};

export default HeroBackground;
