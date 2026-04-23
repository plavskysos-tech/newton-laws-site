const RoadSurface = () => {
  return (
    <div
      className="absolute left-0 right-0"
      style={{
        bottom: '5px',
        height: '90px',
        background:
          'linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 40%, #1e1e1e 100%)',
        boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.5), 0 -3px 10px rgba(0,0,0,0.3)'
      }}
    >
      <div
        className="absolute left-0 right-0"
        style={{
          top: '3px',
          height: '3px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)'
        }}
      />
      <div
        className="absolute left-0 right-0"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          height: '5px',
          background:
            'repeating-linear-gradient(90deg, #f5d547 0px, #f5d547 50px, transparent 50px, transparent 100px)',
          boxShadow: '0 0 6px rgba(245,213,71,0.5)'
        }}
      />
      <div
        className="absolute left-0 right-0"
        style={{
          top: 0,
          height: '3px',
          background: '#e8e8e8',
          opacity: 0.9
        }}
      />
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: 0,
          height: '3px',
          background: '#e8e8e8',
          opacity: 0.9
        }}
      />
    </div>
  );
};

export default RoadSurface;
