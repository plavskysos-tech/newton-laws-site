import CarForces from './CarForces';
import type { CarProps } from './carsData';

const Car = ({ colors, duration, delay, direction, bottom, scale }: CarProps) => {
  const baseWidth = 180;
  const baseHeight = 80;
  const width = baseWidth * scale;
  const height = baseHeight * scale;

  return (
    <div
      className="absolute"
      style={{
        bottom: `${bottom}px`,
        left: direction === 'right' ? `-${width + 40}px` : undefined,
        right: direction === 'left' ? `-${width + 40}px` : undefined,
        width: `${width}px`,
        height: `${height}px`,
        animation: `${direction === 'right' ? 'carDrive' : 'carDriveReverse'} ${duration}s linear ${delay}s infinite`,
        filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.5))',
        transform: direction === 'left' ? 'scaleX(-1)' : undefined,
        zIndex: direction === 'right' ? 2 : 1
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: `${13 * scale}px`,
          left: `${8 * scale}px`,
          width: `${164 * scale}px`,
          height: `${36 * scale}px`,
          background: `linear-gradient(to bottom, ${colors.body} 0%, ${colors.bodyDark} 50%, ${colors.bodyDeep} 100%)`,
          borderRadius: `${10 * scale}px ${20 * scale}px ${6 * scale}px ${6 * scale}px`,
          boxShadow: `inset 0 -${5 * scale}px ${10 * scale}px rgba(0,0,0,0.3), inset 0 ${3 * scale}px ${6 * scale}px rgba(255,255,255,0.25)`
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: `${36 * scale}px`,
          left: `${36 * scale}px`,
          width: `${100 * scale}px`,
          height: `${28 * scale}px`,
          background: `linear-gradient(to bottom, ${colors.roof} 0%, ${colors.roofDark} 100%)`,
          borderRadius: `${16 * scale}px ${22 * scale}px ${3 * scale}px ${3 * scale}px`,
          boxShadow: `inset 0 -${3 * scale}px ${6 * scale}px rgba(0,0,0,0.3), inset 0 ${2 * scale}px ${3 * scale}px rgba(255,255,255,0.3)`
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${5 * scale}px`,
            left: `${6 * scale}px`,
            right: `${6 * scale}px`,
            bottom: `${3 * scale}px`,
            background:
              'linear-gradient(135deg, #c8e6fa 0%, #8ac4e8 50%, #5a95c4 100%)',
            borderRadius: `${10 * scale}px ${16 * scale}px ${2 * scale}px ${2 * scale}px`,
            boxShadow: `inset 0 ${2 * scale}px ${3 * scale}px rgba(255,255,255,0.5)`
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: `${2 * scale}px`,
              left: '48%',
              width: `${3 * scale}px`,
              bottom: `${2 * scale}px`,
              background: 'rgba(0,0,0,0.3)'
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: `${20 * scale}px`,
          left: `${12 * scale}px`,
          width: `${14 * scale}px`,
          height: `${9 * scale}px`,
          background: 'radial-gradient(circle, #fffacd, #f5d547)',
          borderRadius: '50%',
          boxShadow: `0 0 ${14 * scale}px #f5d547, 0 0 ${28 * scale}px rgba(245,213,71,0.7)`
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: `${20 * scale}px`,
          right: `${12 * scale}px`,
          width: `${10 * scale}px`,
          height: `${7 * scale}px`,
          background: colors.tail,
          borderRadius: '50%',
          boxShadow: `0 0 ${10 * scale}px ${colors.glow}`
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: `${3 * scale}px`,
          left: `${14 * scale}px`,
          width: `${12 * scale}px`,
          height: `${3 * scale}px`,
          background: 'rgba(0,0,0,0.5)',
          borderRadius: '2px'
        }}
      />
      {[
        { left: 24 },
        { left: 130 }
      ].map((w, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '0',
            left: `${w.left * scale}px`,
            width: `${30 * scale}px`,
            height: `${30 * scale}px`,
            background:
              'radial-gradient(circle at 40% 40%, #555 0%, #1a1a1a 70%, #000 100%)',
            borderRadius: '50%',
            boxShadow: `inset -${2 * scale}px -${2 * scale}px ${4 * scale}px rgba(0,0,0,0.6), 0 ${3 * scale}px ${4 * scale}px rgba(0,0,0,0.5)`,
            animation: 'wheelSpin 0.3s linear infinite'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${13 * scale}px`,
              height: `${13 * scale}px`,
              background: 'radial-gradient(circle, #c8c8c8, #606060)',
              borderRadius: '50%',
              boxShadow: `inset 0 0 ${2 * scale}px rgba(0,0,0,0.5)`
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${4 * scale}px`,
              height: `${4 * scale}px`,
              background: '#2a2a2a',
              borderRadius: '50%'
            }}
          />
        </div>
      ))}

      <CarForces direction={direction} scale={scale} baseWidth={baseWidth} />
    </div>
  );
};

export default Car;
