import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, useMediaQuery } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import Particles from '../Components/Particles/Particles';

const UnderDevelopmentPage = ({mode}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const mountRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(mode==='dark' ? 0x333333 : 0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(mode==='dark' ? 0x4a76ff : 0xffaa00, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Logo texture
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/tatsam_logo.png');
    const logoGeometry = new THREE.PlaneGeometry(4, 4);
    const logoMaterial = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    scene.add(logo);

    // Orbiting circle
    const circleGeometry = new THREE.TorusGeometry(1, 0.1, 16, 100);
    const circleMaterial = new THREE.MeshBasicMaterial({
      color: mode==='dark' ? 0x4a76ff : 0xff6b00,
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.position.x = 3;
    scene.add(circle);

    // Light beam from logo
    const lightBeamGeometry = new THREE.ConeGeometry(0.5, 3, 32);
    const lightBeamMaterial = new THREE.MeshBasicMaterial({
      color: mode==='dark' ? 0x4a76ff : 0xffcc00,
      transparent: true,
      opacity: 0.6,
    });
    const lightBeam = new THREE.Mesh(lightBeamGeometry, lightBeamMaterial);
    lightBeam.position.z = -1.5;
    lightBeam.rotation.x = Math.PI;
    logo.add(lightBeam);

    camera.position.z = 8;

    // Animation variables
    let time = 0;
    const radius = 3;
    const animationSpeed = 0.01;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      time += animationSpeed;
      
      // Orbit the circle around the logo
      circle.position.x = Math.cos(time) * radius;
      circle.position.y = Math.sin(time) * radius;
      
      // Pulsing light effect
      const pulseIntensity = (Math.sin(time * 3) + 1) * 0.5;
      lightBeam.scale.z = 1 + pulseIntensity * 0.5;
      lightBeam.material.opacity = 0.4 + pulseIntensity * 0.3;
      
      // Rotate the logo slightly
      logo.rotation.z = Math.sin(time * 0.5) * 0.1;
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [mode]);

  const toggleDarkMode = () => {
    // Fixed the syntax error here
    setMode(!mode);
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Particles
          // particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          mode={mode}
        />
      </div>

      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: mode === 'dark' ? 'rgba(18, 18, 18, 0.7)' : 'rgba(245, 245, 245, 0.7)',
          color: mode === 'dark' ? '#fff' : '#333',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Three.js Canvas */}
        <div
          ref={mountRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
        
        {/* Content */}
        <Box
          sx={{
            zIndex: 2,
            textAlign: 'center',
            padding: 4,
            backgroundColor: mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            maxWidth: isMobile ? '90%' : '60%',
          }}
        >
          <ConstructionIcon sx={{ fontSize: 60, mb: 2, color: mode === 'dark' ? '#4a76ff' : '#ff6b00' }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Page Under Construction
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            We're working hard to bring you this feature soon. Please check back later!
          </Typography>
          
          <Box
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src="public\\Tatsam_Logo.jpg"
              alt="Tatsam Logo"
              sx={{
                height: isMobile ? 80 : 120,
                width: isMobile ? 80 : 120,
                my: 3,
                filter: mode === 'dark' ? 'brightness(1.2)' : 'none',
                borderRadius: '50%',
              }}
            />
          </Box>
          
          <Typography variant="caption" display="block" sx={{ mt: 2 }}>
            The circle animation represents our continuous progress
          </Typography>
          
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              cursor: 'pointer',
              zIndex: 10,
            }}
            onClick={toggleDarkMode}
          >
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default UnderDevelopmentPage;