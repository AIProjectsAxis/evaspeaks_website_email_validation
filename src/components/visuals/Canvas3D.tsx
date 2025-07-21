import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Sparkles, Brain, Zap, PhoneIncoming, PhoneCall, MessageSquare, 
  Workflow, GitBranch, Network, Link, Globe, Blocks, 
  Puzzle, Cpu, CalendarClock, Clock, BarChart3, TrendingUp, Mail
} from 'lucide-react';

const Canvas3D: React.FC = () => {
  // Add custom CSS for float animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        33% {
          transform: translateY(-8px) rotate(2deg);
        }
        66% {
          transform: translateY(-4px) rotate(-1deg);
        }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const waveformRef = useRef<THREE.Line | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const animationModeRef = useRef<string>('default');
  const frameIdRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Initialize scene
    sceneRef.current = new THREE.Scene();
    
    // Setup camera with improved perspective
    cameraRef.current = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    cameraRef.current.position.z = 8;
    
    // Setup renderer with enhanced settings
    rendererRef.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current.toneMapping = THREE.ACESFilmicToneMapping;
    rendererRef.current.toneMappingExposure = 1;
    canvasRef.current.appendChild(rendererRef.current.domElement);
    
    // Create lighting with improved ambiance
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    sceneRef.current.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(1, 1, 1);
    sceneRef.current.add(directionalLight);
    
    // Create the visualizations
    createParticles();
    createWaveform();
    
    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Periodic animation mode changes
    intervalRef.current = window.setInterval(() => {
      const modes = ['default', 'pulse', 'wave', 'orbit'];
      const currentIndex = modes.indexOf(animationModeRef.current);
      const nextIndex = (currentIndex + 1) % modes.length;
      animationModeRef.current = modes[nextIndex];
      
      // Reset positions for smooth transition
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const i3 = i * 3;
          positions.array[i3] = (Math.random() * 2 - 1) * 5;
          positions.array[i3 + 1] = (Math.random() * 2 - 1) * 5;
          positions.array[i3 + 2] = (Math.random() * 2 - 1) * 5;
        }
        positions.needsUpdate = true;
      }
    }, 10000); // Change every 10 seconds
    
    window.addEventListener('resize', handleResize);
    
    // Start animation loop
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      
      if (rendererRef.current && canvasRef.current) {
        canvasRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (sceneRef.current) {
        disposeObject(sceneRef.current);
      }
    };
  }, []);
  
  const disposeObject = (obj: THREE.Object3D) => {
    while (obj.children.length > 0) {
      disposeObject(obj.children[0]);
      obj.remove(obj.children[0]);
    }
    if (obj instanceof THREE.Mesh) {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(material => material.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
  };
  
  const createParticles = () => {
    if (!sceneRef.current) return;
    
    const particleCount = 2000; // Optimized for performance
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color = new THREE.Color();
    
    // Generate random positions with color gradients
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() * 2 - 1) * 5;
      positions[i + 1] = (Math.random() * 2 - 1) * 5;
      positions[i + 2] = (Math.random() * 2 - 1) * 5;
      
      // Create color gradient based on position
      color.setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.5);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Create material with improved visual quality
    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    particlesRef.current = new THREE.Points(geometry, material);
    sceneRef.current.add(particlesRef.current);
  };
  
  const createWaveform = () => {
    if (!sceneRef.current) return;
    
    const segments = 128;
    const radius = 3;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array((segments + 1) * 3);
    const colors = new Float32Array((segments + 1) * 3);
    
    const color = new THREE.Color();
    
    // Create a circle of points with color gradient
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;
      
      // Create color gradient
      color.setHSL(i / segments, 0.7, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Line material with improved visual quality
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    waveformRef.current = new THREE.Line(geometry, material);
    sceneRef.current.add(waveformRef.current);
  };
  
  const animate = () => {
    frameIdRef.current = requestAnimationFrame(animate);
    
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
    
    const time = clockRef.current.getElapsedTime();
    
    // Smooth camera movement
    cameraRef.current.position.x = Math.sin(time * 0.1) * 1.5;
    cameraRef.current.position.y = Math.cos(time * 0.1) * 1.5;
    cameraRef.current.lookAt(0, 0, 0);
    
    // Animate particles
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        const x = positions.array[i3];
        const y = positions.array[i3 + 1];
        const z = positions.array[i3 + 2];
        
        // Calculate distance before the switch statement
        const distance = Math.sqrt(x * x + y * y + z * z);
        
        switch (animationModeRef.current) {
          case 'pulse':
            const pulse = Math.sin(time * 2 - distance) * 0.1;
            positions.array[i3] = x + (x / distance) * pulse;
            positions.array[i3 + 1] = y + (y / distance) * pulse;
            positions.array[i3 + 2] = z + (z / distance) * pulse;
            break;
            
          case 'wave':
            positions.array[i3] = x + Math.sin(y * 0.5 + time * 2) * 0.1;
            positions.array[i3 + 1] = y + Math.sin(x * 0.5 + time * 2) * 0.1;
            break;
            
          case 'orbit':
            const angle = time * (0.1 / (Math.sqrt(x * x + z * z) + 0.5));
            positions.array[i3] = x * Math.cos(angle) - z * Math.sin(angle);
            positions.array[i3 + 2] = x * Math.sin(angle) + z * Math.cos(angle);
            break;
            
          default: // 'default' mode
            positions.array[i3] = x + Math.sin(time + distance) * 0.02;
            positions.array[i3 + 1] = y + Math.cos(time + distance) * 0.02;
            positions.array[i3 + 2] = z + Math.sin(time * 0.5 + distance) * 0.02;
        }
      }
      
      positions.needsUpdate = true;
    }
    
    // Animate waveform
    if (waveformRef.current) {
      const positions = waveformRef.current.geometry.attributes.position;
      const segments = positions.count - 1;
      
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const radius = 3 + Math.sin(theta * 8 + time * 2) * 0.2;
        
        positions.array[i * 3] = radius * Math.cos(theta);
        positions.array[i * 3 + 1] = radius * Math.sin(theta);
        positions.array[i * 3 + 2] = Math.sin(theta * 6 + time) * 0.2;
      }
      
      positions.needsUpdate = true;
      waveformRef.current.rotation.z = time * 0.2;
    }
    
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {/* Three.js Canvas */}
      <div 
        ref={canvasRef} 
        className="absolute inset-0"
        aria-hidden="true"
      />
      
      {/* Modern floating icon constellation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary constellation - diagonal flow */}
        <div className="absolute top-[15%] left-[8%] text-violet-400/40 transition-all duration-1000 hover:text-violet-400/70 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '4s' }}>
            <Brain size={22} />
          </div>
        </div>
        
        <div className="absolute top-[25%] left-[20%] text-blue-400/35 transition-all duration-1000 hover:text-blue-400/60 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
            <PhoneCall size={24} />
          </div>
        </div>
        
        <div className="absolute top-[35%] left-[35%] text-cyan-400/45 transition-all duration-1000 hover:text-cyan-400/70 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <CalendarClock size={26} />
          </div>
        </div>
        
        <div className="absolute top-[45%] left-[50%] text-emerald-400/40 transition-all duration-1000 hover:text-emerald-400/65 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
            <Sparkles size={24} />
          </div>
        </div>
        
        <div className="absolute top-[55%] left-[65%] text-purple-400/35 transition-all duration-1000 hover:text-purple-400/60 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '3.8s', animationDelay: '2s' }}>
            <Workflow size={24} />
          </div>
        </div>
        
        <div className="absolute top-[65%] left-[80%] text-indigo-400/45 transition-all duration-1000 hover:text-indigo-400/70 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '3.2s', animationDelay: '2.5s' }}>
            <Network size={20} />
          </div>
        </div>
        
        {/* Secondary constellation - complementary positions */}
        <div className="absolute top-[20%] right-[12%] text-teal-400/30 transition-all duration-1000 hover:text-teal-400/55 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.3s' }}>
            <Globe size={22} />
          </div>
        </div>
        
        <div className="absolute top-[40%] right-[25%] text-rose-400/35 transition-all duration-1000 hover:text-rose-400/60 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '4.2s', animationDelay: '1.2s' }}>
            <Mail size={24} />
          </div>
        </div>
        
        <div className="absolute top-[60%] right-[8%] text-amber-400/40 transition-all duration-1000 hover:text-amber-400/65 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '3.6s', animationDelay: '1.8s' }}>
            <Link size={20} />
          </div>
        </div>
        
        {/* Accent elements - corners and edges */}
        <div className="absolute top-[8%] left-[45%] text-slate-400/25 transition-all duration-1000 hover:text-slate-400/50 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '6s', animationDelay: '0.8s' }}>
            <Zap size={18} />
          </div>
        </div>
        
        <div className="absolute bottom-[15%] left-[15%] text-cyan-300/30 transition-all duration-1000 hover:text-cyan-300/55 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '4.8s', animationDelay: '2.2s' }}>
            <MessageSquare size={24} />
          </div>
        </div>
        
        <div className="absolute bottom-[25%] right-[30%] text-orange-400/35 transition-all duration-1000 hover:text-orange-400/60 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '3.4s', animationDelay: '1.6s' }}>
            <PhoneIncoming size={22} />
          </div>
        </div>
        
        <div className="absolute bottom-[8%] right-[15%] text-blue-300/40 transition-all duration-1000 hover:text-blue-300/65 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '4.1s', animationDelay: '0.7s' }}>
            <TrendingUp size={24} />
          </div>
        </div>
        
        {/* Subtle background elements */}
        <div className="absolute top-[70%] left-[25%] text-violet-300/20 transition-all duration-1000 hover:text-violet-300/40 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '7s', animationDelay: '3s' }}>
            <Puzzle size={16} />
          </div>
        </div>
        
        <div className="absolute top-[12%] right-[35%] text-emerald-300/25 transition-all duration-1000 hover:text-emerald-300/45 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '1.1s' }}>
            <Cpu size={18} />
          </div>
        </div>
        
        <div className="absolute bottom-[40%] left-[8%] text-pink-300/30 transition-all duration-1000 hover:text-pink-300/50 hover:scale-110">
          <div className="animate-float" style={{ animationDuration: '4.7s', animationDelay: '2.8s' }}>
            <Clock size={19} />
          </div>
        </div>
        
        <div className="absolute bottom-[30%] left-[60%] text-indigo-300/25 transition-all duration-1000 hover:text-indigo-300/45 hover:scale-110">
          <div className="animate-pulse" style={{ animationDuration: '3.9s', animationDelay: '1.9s' }}>
            <BarChart3 size={17} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas3D;