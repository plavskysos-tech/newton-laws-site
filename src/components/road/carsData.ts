export interface CarColors {
  body: string;
  bodyDark: string;
  bodyDeep: string;
  roof: string;
  roofDark: string;
  tail: string;
  glow: string;
}

export interface CarProps {
  colors: CarColors;
  duration: number;
  delay: number;
  direction: 'right' | 'left';
  bottom: number;
  scale: number;
}

export const carsData: Omit<CarProps, 'bottom'>[] = [
  {
    colors: {
      body: '#ff4757',
      bodyDark: '#e8313f',
      bodyDeep: '#a01a24',
      roof: '#ff5767',
      roofDark: '#d62838',
      tail: '#c91a2c',
      glow: 'rgba(255,50,50,0.7)'
    },
    duration: 15,
    delay: 0,
    direction: 'right',
    scale: 1
  },
  {
    colors: {
      body: '#4a90e2',
      bodyDark: '#2f6fb8',
      bodyDeep: '#1a4d87',
      roof: '#5ba3f0',
      roofDark: '#2a6cb0',
      tail: '#c91a2c',
      glow: 'rgba(255,50,50,0.7)'
    },
    duration: 15,
    delay: 5,
    direction: 'right',
    scale: 0.9
  },
  {
    colors: {
      body: '#ffd93d',
      bodyDark: '#e8b820',
      bodyDeep: '#a8840a',
      roof: '#ffe066',
      roofDark: '#d4a020',
      tail: '#c91a2c',
      glow: 'rgba(255,50,50,0.7)'
    },
    duration: 14,
    delay: 0,
    direction: 'left',
    scale: 0.95
  },
  {
    colors: {
      body: '#50c878',
      bodyDark: '#2fa85d',
      bodyDeep: '#1e7a42',
      roof: '#6bd88e',
      roofDark: '#3a9a50',
      tail: '#c91a2c',
      glow: 'rgba(255,50,50,0.7)'
    },
    duration: 14,
    delay: 7,
    direction: 'left',
    scale: 0.9
  },
  {
    colors: {
      body: '#a855f7',
      bodyDark: '#8438d0',
      bodyDeep: '#5a1ea0',
      roof: '#b968fa',
      roofDark: '#8040c8',
      tail: '#c91a2c',
      glow: 'rgba(255,50,50,0.7)'
    },
    duration: 15,
    delay: 10,
    direction: 'right',
    scale: 1.05
  }
];
