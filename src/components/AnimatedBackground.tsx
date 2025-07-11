import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [shapes, setShapes] = useState<Array<{id: number; size: number; top: string; left: string; delay: number}>>([]);

  useEffect(() => {
    // Generate random floating shapes
    const newShapes = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.random() * 300 + 100, // 100-400px
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="floating-shape bg-foreground dark:bg-background"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: shape.top,
            left: shape.left,
            animationDelay: `${shape.delay}s`,
            filter: 'blur(40px)'
          }}
        />
      ))}
    </div>
  );
};
