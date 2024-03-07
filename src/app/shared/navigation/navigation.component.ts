import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  RouterLink,
  RouterLinkActive,
  IsActiveMatchOptions,
  ActivatedRoute,
} from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { ItemNavigation } from '../../interfaces/iterfaces';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    ThemeSwitchComponent,
    NgFor,
  ],
})
export class NavigationComponent implements OnInit {
  items: ItemNavigation[] = [];
  chipSelected: boolean = false;

  constructor(private navigation: NavigationService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.navigation.getNavigation().subscribe((data) => (this.items = data));
    console.log(this.items);
  }
}
