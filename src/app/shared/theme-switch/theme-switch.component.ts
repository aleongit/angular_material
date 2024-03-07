import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, FormsModule],
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
