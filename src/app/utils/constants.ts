import { ItemNavigation, MaterialColor } from '../interfaces/iterfaces';
import { getRandomMaterialColor } from '../utils/helpers';

export const COLORS: MaterialColor[] = [
  { name: 'none', color: undefined },
  { name: 'Primary', color: 'primary' },
  { name: 'Accent', color: 'accent' },
  { name: 'Warn', color: 'warn' },
];

export const ITEMS: ItemNavigation[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    color: getRandomMaterialColor(),
  },
  {
    name: 'card',
    url: '/card',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'menu',
    url: '/menu',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'toolbar',
    url: '/toolbar',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'icon',
    url: '/icon',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'button',
    url: '/button',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'slide-toggle',
    url: '/slide-toggle',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'chips',
    url: '/chips',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'tabs',
    url: '/tabs',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'table',
    url: '/table',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'stepper',
    url: '/stepper',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'datepicker',
    url: '/datepicker',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'autocomplete',
    url: '/autocomplete',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'dialog',
    url: '/dialog',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'form-field',
    url: '/form-field',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'paginator',
    url: '/paginator',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'progress-bar',
    url: '/progress-bar',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'select',
    url: '/select',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'radio-button',
    url: '/radio-button',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'checkbox',
    url: '/checkbox',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'snackbar',
    url: '/snackbar',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'tooltip',
    url: '/tooltip',
    icon: 'done',
    color: getRandomMaterialColor(),
  },
  {
    name: 'Logout',
    url: '/logout',
    icon: 'exit_to_app',
    color: getRandomMaterialColor(),
  },
];
