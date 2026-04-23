import Car from './road/Car';
import RoadSurface from './road/RoadSurface';
import { carsData } from './road/carsData';

interface RoadProps {
  scrollProgress: number;
}

const Road = ({ scrollProgress }: RoadProps) => {
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.7) * 5));
  const translateY = (1 - opacity) * 80;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 700ms ease-out, transform 700ms ease-out',
        zIndex: 3,
        height: '110px',
        visibility: opacity > 0.001 ? 'visible' : 'hidden'
      }}
    >
      <RoadSurface />

      {carsData.map((car, i) => (
        <Car
          key={i}
          {...car}
          bottom={car.direction === 'right' ? 8 : 52}
        />
      ))}
    </div>
  );
};

export default Road;