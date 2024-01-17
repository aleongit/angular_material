import { MaterialColor } from '../interfaces/iterfaces';
import { COLORS } from '../utils/constants';

export const getRandomMaterialColor = () => {
  const colors: MaterialColor[] = COLORS;
  return colors[Math.floor(Math.random() * colors.length)].color;
};
