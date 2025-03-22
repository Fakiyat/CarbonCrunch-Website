import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import Card from "./cards";
import "./Threejscardsection.css";
const ThreeJsCardSection = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsData = [
    {
      number: "3X",
      text: "ESG High Performers Deliver A Higher Total Shareholder Return",
      color: "green",
    },
    {
      number: "98%",
      text: "Of CEOs Agree Sustainability Is Their Responsibility",
      color: "dark",
    },
    {
      number: "18%",
      text: "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050",
      color: "dark",
    },
    {
      number: "37%",
      text: "Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track",
      color: "green",
    },
  ];

  // Scene objects
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cardsRef = useRef([]);
  const animationFrameId = useRef(null);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const aspect =
      containerRef.current.clientWidth / containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
    camera.position.z = 700;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0xffffff, 0);
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    rendererRef.current = renderer;

    // Add lights for better card visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);

    // Add fill light from the opposite side
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-1, -1, 2);
    scene.add(fillLight);

    // Create cards in 3D
    createCards();

    // Add background particles
    createBackgroundParticles();

    // Start animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      // Dispose geometries and materials
      cardsRef.current.forEach((card) => {
        if (card.geometry) card.geometry.dispose();
        if (card.material) card.material.dispose();
        if (card.parent) card.parent.remove(card);
      });

      // Clear scene
      while (scene.children.length > 0) {
        const obj = scene.children[0];
        scene.remove(obj);
      }
    };
  }, []);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current || cardsRef.current.length === 0) return;

      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      cardsRef.current.forEach((card) => {
        gsap.to(card.rotation, {
          x: mouseY * 0.1,
          y: mouseX * 0.1,
          duration: 1,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Create 3D cards
  const createCards = () => {
    const cardWidth = 700;
    const cardHeight = 400;

    cardsRef.current = cardsData.map((data, index) => {
      // Use the exact same color values as in your original CSS
      const cardColor = data.color === "green" ? "#00b020" : "#333333";

      // Create canvas for each card to render the card content
      const canvas = document.createElement("canvas");
      canvas.width = cardWidth;
      canvas.height = cardHeight;
      const ctx = canvas.getContext("2d");

      // Background
      ctx.fillStyle = cardColor;
      ctx.fillRect(0, 0, cardWidth, cardHeight);

      // Add subtle texture
      ctx.fillStyle = "rgba(116, 255, 24, 0.6)";
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * cardWidth;
        const y = Math.random() * cardHeight;
        const size = Math.random() * 5 + 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Number - make it larger and bolder
      ctx.fillStyle = "white";
      ctx.font = "bold 100px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(data.number, cardWidth / 2, cardHeight / 3);

      // Text - make it larger with better contrast
      ctx.font = "bold 22px Inter, sans-serif";
      ctx.textAlign = "center";

      // Wrap text
      const words = data.text.split(" ");
      let line = "";
      let y = cardHeight / 2;
      const lineHeight = 28;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > cardWidth - 60 && n > 0) {
          ctx.fillText(line, cardWidth / 2, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, cardWidth / 2, y);

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);

      // Create card mesh with better lighting properties
      const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        roughness: 0.1,
        metalness: 0.2,
        emissiveIntensity: 0,
        emissive: new THREE.Color(0xffffff),
      });

      const card = new THREE.Mesh(geometry, material);

      // Position cards
      card.position.x = (index - currentIndex) * 300;
      card.position.y = 0;
      card.position.z = -Math.abs(index - currentIndex) * 200;

      // Add slight rotation
      card.rotation.y = (index - currentIndex) * 0.3;

      // Scale based on distance from center
      card.scale.set(
        Math.abs(index - currentIndex) < 0.5 ? 1 : 0.8,
        Math.abs(index - currentIndex) < 0.5 ? 1 : 0.8,
        Math.abs(index - currentIndex) < 0.5 ? 1 : 0.8
      );

      // Add custom data
      card.userData = {
        index: index,
        originalPosition: new THREE.Vector3(
          card.position.x,
          card.position.y,
          card.position.z
        ),
      };

      sceneRef.current.add(card);
      return card;
    });

    // Initial positioning
    positionCards();
  };

  // Create background particles
  const createBackgroundParticles = () => {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 10000;

    const positions = new Float32Array(particlesCount * 2);
    const colors = new Float32Array(particlesCount * 2);

    for (let i = 0; i < particlesCount * 2; i += 2) {
      // Position particles in a large sphere
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      // Colors with green tint for sustainability theme
      colors[i] = 0.7 + Math.random() * 0.3; // R
      colors[i + 1] = 0.9 + Math.random() * 0.9; // G (more green)
      colors[i + 2] = 0.7 + Math.random() * 0.3; // B
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      color: 0x00b020,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particles.name = "particles";
    sceneRef.current.add(particles);
  };

  // Position cards based on current index
  const positionCards = () => {
    cardsRef.current.forEach((card, i) => {
      const distance = i - currentIndex;

      gsap.to(card.position, {
        x: distance * 700,
        y: 0,
        z: -Math.abs(distance) * 100,
        duration: 0.7,
        ease: "power2.inOut",
      });

      gsap.to(card.rotation, {
        y: distance * 0.3,
        duration: 1,
        ease: "power2.inOut",
      });

      // Scale down cards that are not in focus
      gsap.to(card.scale, {
        x: Math.abs(distance) < 0.5 ? 1 : 0.8,
        y: Math.abs(distance) < 0.5 ? 1 : 0.8,
        z: Math.abs(distance) < 0.5 ? 1 : 0.8,
        duration: 1,
        ease: "power2.inOut",
      });

      // Adjust opacity
      gsap.to(card.material, {
        opacity: Math.abs(distance) < 2 ? 1 : 0.3,
        transparent: true,
        duration: 1,
      });
    });
  };

  // Navigation handlers
  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Add a quick visual feedback for the clicked card
    if (cardsRef.current[currentIndex]) {
      gsap.to(cardsRef.current[currentIndex].position, {
        x: 30,
        duration: 0.2,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          // Continue with the regular navigation
          setCurrentIndex((prev) => {
            const newIndex = (prev - 1 + cardsData.length) % cardsData.length;
            return newIndex;
          });

          setTimeout(() => {
            positionCards();
            setIsAnimating(false);
          }, 50);
        },
      });
    } else {
      // Fallback if the card reference isn't available
      setCurrentIndex((prev) => {
        const newIndex = (prev - 1 + cardsData.length) % cardsData.length;
        return newIndex;
      });

      setTimeout(() => {
        positionCards();
        setIsAnimating(false);
      }, 50);
    }
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Add a quick visual feedback for the clicked card
    if (cardsRef.current[currentIndex]) {
      gsap.to(cardsRef.current[currentIndex].position, {
        x: -30,
        duration: 0.2,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          // Continue with the regular navigation
          setCurrentIndex((prev) => {
            const newIndex = (prev + 1) % cardsData.length;
            return newIndex;
          });

          setTimeout(() => {
            positionCards();
            setIsAnimating(false);
          }, 60);
        },
      });
    } else {
      // Fallback if the card reference isn't available
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % cardsData.length;
        return newIndex;
      });

      setTimeout(() => {
        positionCards();
        setIsAnimating(false);
      }, 50);
    }
  };

  // Animation loop
  const animate = () => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    animationFrameId.current = requestAnimationFrame(animate);

    // Rotate background particles
    const particles = sceneRef.current.getObjectByName("particles");
    if (particles) {
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;
    }

    // Add subtle movement to cards
    cardsRef.current.forEach((card) => {
      card.position.y = Math.sin(Date.now() * 0.001 + card.userData.index) * 10;
    });

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  // Current card data
  const currentCard = cardsData[currentIndex];

  return (
    <div className="threejs-card-section">
      <div className="threejs-card-container" ref={containerRef}>
        <canvas ref={canvasRef} className="threejs-canvas"></canvas>

        {/* Left overlay navigation */}
        <div className="card-nav-overlay left" onClick={handlePrev}>
          <div className="overlay-arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right overlay navigation */}
        <div className="card-nav-overlay right" onClick={handleNext}>
          <div className="overlay-arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Regular cards for mobile fallback */}
        <div className="mobile-cards-container">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`mobile-card ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <Card number={card.number} text={card.text} color={card.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeJsCardSection;
