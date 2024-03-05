import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
  isChecked = false;

  constructor(private themeService: ThemeService) {}

  public selectTheme(): void {
    this.isChecked
      ? this.themeService.setDarkTheme()
      : this.themeService.setLightTheme();
    //console.log(this.theme);
  }
}
