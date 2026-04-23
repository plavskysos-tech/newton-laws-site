interface FallingAppleProps {
  scrollProgress: number;
}

const FallingApple = ({ scrollProgress }: FallingAppleProps) => {
  const topPosition = scrollProgress * 90;
  const rotation = scrollProgress * 540;
  const swayX = Math.sin(scrollProgress * Math.PI * 3) * 20;

  return (
    <div
      className="fixed pointer-events-none z-20"
      style={{
        right: '8%',
        top: `${topPosition}vh`,
        transform: `translateX(${swayX}px) rotate(${rotation}deg)`,
        transition: 'top 0.1s linear, transform 0.1s linear',
        opacity: scrollProgress > 0.02 && scrollProgress < 0.98 ? 1 : 0
      }}
    >
      <div className="relative" style={{ width: '50px', height: '55px' }}>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '8px',
            background: 'linear-gradient(to bottom, #5a3a1a, #3d2810)',
            borderRadius: '1px',
            zIndex: 2
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: '58%',
            width: '14px',
            height: '8px',
            background: 'linear-gradient(135deg, #4a7c2a 0%, #2d5016 100%)',
            borderRadius: '0 100% 0 60%',
            transform: 'rotate(30deg)',
            boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '6px',
            left: '0',
            width: '50px',
            height: '48px',
            background: 'radial-gradient(circle at 35% 30%, #ff6b6b 0%, #e03131 40%, #a61e1e 80%, #6b1111 100%)',
            borderRadius: '50% 50% 45% 45% / 45% 45% 55% 55%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset -4px -4px 10px rgba(0,0,0,0.2), inset 3px 3px 8px rgba(255,255,255,0.2)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '12px',
              width: '10px',
              height: '14px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(2px)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FallingApple;
