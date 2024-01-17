import { ThemePalette } from '@angular/material/core';

export interface ItemNavigation {
  name: string;
  url: string;
  icon: string;
  color: ThemePalette;
}

export interface MaterialColor {
  name: string;
  color: ThemePalette;
}
