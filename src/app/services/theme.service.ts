import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly THEME_LIGHT = 'light';
  private static readonly THEME_DARK = 'dark';

  public theme: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.document.documentElement.classList.contains(
      ThemeService.DARK_THEME_CLASS
    )
      ? ThemeService.THEME_DARK
      : ThemeService.THEME_LIGHT;
    console.log(this.theme);
  }

  public selectDarkTheme(): void {
    this.document.documentElement.classList.add(ThemeService.DARK_THEME_CLASS);
    this.theme = ThemeService.THEME_DARK;
    console.log(this.theme);
  }

  public selectLightTheme(): void {
    this.document.documentElement.classList.remove(
      ThemeService.DARK_THEME_CLASS
    );
    this.theme = ThemeService.THEME_LIGHT;
    console.log(this.theme);
  }
}
