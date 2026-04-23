interface CarForcesProps {
  direction: 'right' | 'left';
  scale: number;
  baseWidth: number;
}

const CarForces = ({ direction, scale, baseWidth }: CarForcesProps) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          bottom: `${32 * scale}px`,
          left: `${baseWidth * scale}px`,
          height: '3px',
          width: `${70 * scale}px`,
          background: 'linear-gradient(to right, rgba(52,211,77,0) 0%, #34d34d 40%, #34d34d 100%)',
          transform: direction === 'left' ? 'scaleX(-1)' : undefined,
          transformOrigin: 'left center',
          boxShadow: '0 0 4px rgba(52,211,77,0.8)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '-2px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '7px solid transparent',
            borderBottom: '7px solid transparent',
            borderLeft: '12px solid #34d34d',
            filter: 'drop-shadow(0 0 3px rgba(52,211,77,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-8px',
            top: '-20px',
            color: '#34d34d',
            fontSize: `${13 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          F тяги
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: `${32 * scale}px`,
          right: `${baseWidth * scale - 20}px`,
          height: '3px',
          width: `${50 * scale}px`,
          background: 'linear-gradient(to left, rgba(255,107,107,0) 0%, #ff6b6b 40%, #ff6b6b 100%)',
          transform: direction === 'left' ? 'scaleX(-1)' : undefined,
          transformOrigin: 'right center',
          boxShadow: '0 0 4px rgba(255,107,107,0.8)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '-2px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: '10px solid #ff6b6b',
            filter: 'drop-shadow(0 0 3px rgba(255,107,107,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-10px',
            top: '-20px',
            color: '#ff6b6b',
            fontSize: `${12 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          F тр
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: `-${55 * scale}px`,
          left: '50%',
          width: '3px',
          height: `${55 * scale}px`,
          background: 'linear-gradient(to top, rgba(96,165,250,0) 0%, #60a5fa 40%, #60a5fa 100%)',
          boxShadow: '0 0 4px rgba(96,165,250,0.8)',
          transform: direction === 'left' ? 'translateX(-50%) scaleX(-1)' : 'translateX(-50%)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderBottom: '12px solid #60a5fa',
            filter: 'drop-shadow(0 0 3px rgba(96,165,250,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-22px',
            left: '10px',
            color: '#60a5fa',
            fontSize: `${12 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          N
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: `${36 * scale}px`,
          left: '50%',
          width: '3px',
          height: `${55 * scale}px`,
          background: 'linear-gradient(to bottom, rgba(251,191,36,0) 0%, #fbbf24 40%, #fbbf24 100%)',
          boxShadow: '0 0 4px rgba(251,191,36,0.8)',
          transform: direction === 'left' ? 'translateX(-50%) scaleX(-1)' : 'translateX(-50%)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderTop: '12px solid #fbbf24',
            filter: 'drop-shadow(0 0 3px rgba(251,191,36,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-22px',
            left: '10px',
            color: '#fbbf24',
            fontSize: `${12 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          mg
        </div>
      </div>
    </>
  );
};

export default CarForces;
