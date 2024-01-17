import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { ItemNavigation } from '../../interfaces/iterfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
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
