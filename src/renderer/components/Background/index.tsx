import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SquareProps {
  position: [number, number, number];
  index: number;
  onHover: (index: number | null) => void;
  isHighlighted: boolean;
  visibility: number;
}

const Square: React.FC<SquareProps> = ({ position, index, onHover, isHighlighted, visibility }) => {
  const ref = useRef<THREE.LineSegments>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
        const time = clock.elapsedTime;
        ref.current.position.x = position[0] + Math.sin(time * 0.5 + index * 2 ) * 0.5
        ref.current.position.y = position[1] + Math.cos(time * 0.5 + index * 2) * 0.5
        ref.current.position.z = position[2] + Math.sin(time * 0.5) * 0.5;

        ref.current.rotation.z += Math.sin(time * 0.5 + index * 2) * 0.0005
    }
  });

  return (
    <lineSegments
      ref={ref}
      position={position}
      onPointerOver={() => onHover(index)}
      onPointerOut={() => onHover(null)}
    >
      <edgesGeometry attach="geometry" args={[new THREE.CircleGeometry(1, 1)]} />
      <lineBasicMaterial
        attach="material"
        color={'white'}
        transparent
        opacity={0.4 * visibility}
      />
    </lineSegments>
  );
};

const Background: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState<[number, number, number][]>([]);
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    const range = 10;
    const newPositions: [number, number, number][] = Array.from({ length: 50   }, () => [
      Math.random() * range - range / 2,
      Math.random() * range - range / 2,
      0,
    ]);
    setPositions(newPositions);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const isSquareVisible = (position: [number, number, number], cursorPosition: { x: number; y: number }) => {
    const canvasBounds = document.querySelector('.background')?.getBoundingClientRect();
    if (!canvasBounds) return 0;

    const canvasX = (canvasBounds.width / 2) + position[0] * (canvasBounds.width / 10);
    const canvasY = (canvasBounds.height / 2) - position[1] * (canvasBounds.height / 10);

    const dx = cursorPosition.x - canvasX;
    const dy = cursorPosition.y - canvasY;
    return 40 / Math.sqrt(dx * dx + dy * dy)
  };

  return (
    <Canvas className='background' style={{ zIndex: -1, width: "90vw", height: "100vh", position: "absolute" }}>
      {positions.map((position, i) => (
        <Square
          key={i}
          index={i}
          position={position}
          onHover={setHoveredIndex}
          isHighlighted={hoveredIndex === i || hoveredIndex === i - 1 || hoveredIndex === i + 1}
          visibility={isSquareVisible(position, cursorPosition)}
        />
      ))}
    </Canvas>
  );
};

export default Background;
