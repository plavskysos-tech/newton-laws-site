import Car from './road/Car';
import RoadSurface from './road/RoadSurface';
import { carsData } from './road/carsData';

interface RoadProps {
  scrollProgress: number;
}

const Road = ({ scrollProgress }: RoadProps) => {
  const visible = scrollProgress > 0.75;
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.75) * 5));

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none"
      style={{
        opacity,
        transition: 'opacity 600ms ease-out',
        zIndex: 3,
        height: '110px',
        display: visible ? 'block' : 'none'
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
