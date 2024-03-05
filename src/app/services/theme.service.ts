import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private DARK_THEME_CLASS = 'dark-theme'; //classe
  private LIGHT = 'light';
  private DARK = 'dark';
  public theme?: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.document.documentElement.classList.contains(
      this.DARK_THEME_CLASS
    )
      ? this.DARK
      : this.LIGHT;
    console.log(this.theme);
  }

  //afegir classe 'dark-theme' a 'class' de <html>
  public setDarkTheme(): void {
    this.document.documentElement.classList.add(this.DARK_THEME_CLASS);
    this.theme = this.DARK;
    console.log(this.theme);
  }

  //treure classe 'dark-theme' a 'class' de <html>
  public setLightTheme(): void {
    this.document.documentElement.classList.remove(this.DARK_THEME_CLASS);
    this.theme = this.LIGHT;
    console.log(this.theme);
  }
}
