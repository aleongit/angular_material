import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  providers: [],
})
export class AppComponent {
  title = 'angular_material';
  text = 'Hello Angular Material !';

  constructor() {}
}
