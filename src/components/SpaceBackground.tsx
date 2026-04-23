interface SpaceBackgroundProps {
  scrollProgress: number;
}

const SpaceBackground = ({ scrollProgress }: SpaceBackgroundProps) => {
  return (
    <>
      <div 
        className="fixed inset-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(10, 10, 30, ${Math.max(0, 1 - scrollProgress * 1.5)}) 0%, 
            rgba(15, 20, 45, ${Math.max(0, 0.9 - scrollProgress * 1.3)}) 20%,
            rgba(20, 30, 60, ${Math.max(0, 0.8 - scrollProgress * 1.2)}) 35%,
            rgba(25, 50, 100, ${Math.max(0, 0.7 - scrollProgress * 1.0)}) 45%,
            transparent 55%,
            transparent 100%
          )`,
          opacity: 1
        }}
      />
      {Array.from({ length: 100 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const topPos = Math.random() * 70;
        const leftPos = Math.random() * 100;
        const animDuration = Math.random() * 3 + 2;
        return (
          <div
            key={i}
            className="fixed rounded-full bg-white pointer-events-none"
            style={{
              width: size + 'px',
              height: size + 'px',
              top: topPos + '%',
              left: leftPos + '%',
              opacity: Math.max(0, Math.min(1, (0.2 - scrollProgress) * 5)),
              animation: `twinkle ${animDuration}s infinite`,
              transition: 'opacity 800ms ease-out',
              willChange: 'opacity'
            }}
          />
        );
      })}
      {Array.from({ length: 5 }).map((_, i) => {
        const startX = 20 + Math.random() * 60;
        const startY = 10 + Math.random() * 30;
        const duration = 3.5 + Math.random() * 2;
        const delay = i === 0 ? 0 : i * 2.5 + Math.random() * 2;
        return (
          <div
            key={`meteor-${i}`}
            className="fixed pointer-events-none transition-opacity duration-500"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              opacity: Math.max(0, Math.min(1, (0.25 - scrollProgress) * 4)),
              animation: `shootingStar ${duration}s ease-in ${delay}s infinite`
            }}
          >
            <div 
              className="relative"
              style={{
                width: '5px',
                height: '5px',
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 15px 3px rgba(255,255,255,1), 0 0 30px 6px rgba(200,200,255,0.6), 0 0 50px 10px rgba(150,150,255,0.3)'
              }}
            >
              <div 
                className="absolute"
                style={{
                  width: '120px',
                  height: '2px',
                  background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.6) 30%, transparent)',
                  top: '0',
                  left: '0',
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'left top',
                }}
              />
            </div>
          </div>
        );
      })}
      <div
        className="fixed pointer-events-none transition-opacity duration-500"
        style={{
          left: '70%',
          top: '15%',
          opacity: Math.max(0, Math.min(1, (0.25 - scrollProgress) * 4)),
          animation: 'sputnikOrbit 25s linear infinite'
        }}
      >
        <div className="relative" style={{ transform: 'rotate(10deg)' }}>
          <div 
            style={{
              width: '20px',
              height: '28px',
              background: 'linear-gradient(180deg, rgba(230,230,245,1) 0%, rgba(200,200,220,0.95) 40%, rgba(180,180,210,0.9) 100%)',
              borderRadius: '3px 3px 6px 6px',
              boxShadow: '0 0 12px 2px rgba(120,150,255,0.4), inset -1px -2px 4px rgba(0,0,0,0.25), inset 1px 1px 3px rgba(255,255,255,0.4)',
              position: 'relative',
              border: '0.5px solid rgba(180,180,220,0.5)'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                width: '14px',
                height: '8px',
                background: 'linear-gradient(135deg, rgba(80,120,200,0.3), rgba(100,140,220,0.5))',
                borderRadius: '2px',
                top: '6px',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 6px 1px rgba(100,140,220,0.3)',
                border: '0.5px solid rgba(120,160,240,0.4)'
              }}
            />
          </div>
          <div 
            style={{
              position: 'absolute',
              top: '-3px',
              left: '-28px',
              width: '28px',
              height: '18px',
              background: 'linear-gradient(90deg, rgba(80,120,200,0.2) 0%, rgba(100,140,220,0.3) 50%, rgba(80,120,200,0.2) 100%)',
              border: '1px solid rgba(120,160,240,0.5)',
              boxShadow: '0 0 8px 1px rgba(100,140,220,0.25)',
              transform: 'perspective(100px) rotateY(-15deg)',
              borderRadius: '1px'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              inset: '2px', 
              background: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(120,160,240,0.2) 4px, rgba(120,160,240,0.2) 5px)',
              borderRadius: '1px'
            }} />
          </div>
          <div 
            style={{
              position: 'absolute',
              top: '-3px',
              right: '-28px',
              width: '28px',
              height: '18px',
              background: 'linear-gradient(90deg, rgba(80,120,200,0.2) 0%, rgba(100,140,220,0.3) 50%, rgba(80,120,200,0.2) 100%)',
              border: '1px solid rgba(120,160,240,0.5)',
              boxShadow: '0 0 8px 1px rgba(100,140,220,0.25)',
              transform: 'perspective(100px) rotateY(15deg)',
              borderRadius: '1px'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              inset: '2px', 
              background: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(120,160,240,0.2) 4px, rgba(120,160,240,0.2) 5px)',
              borderRadius: '1px'
            }} />
          </div>
          <div 
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1.5px',
              height: '14px',
              background: 'linear-gradient(to bottom, rgba(200,200,230,0.8), rgba(180,180,210,0.4))',
            }}
          >
            <div 
              style={{
                position: 'absolute',
                bottom: '-3px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderTop: '6px solid rgba(200,200,230,0.7)',
              }}
            />
          </div>
          <div 
            style={{
              position: 'absolute',
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              background: 'radial-gradient(circle, rgba(255,220,100,1), rgba(255,180,80,0.8))',
              borderRadius: '50%',
              boxShadow: '0 0 10px 3px rgba(255,200,100,0.7)'
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SpaceBackground;