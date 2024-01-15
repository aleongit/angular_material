import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemNavigation } from '../interfaces/item-navigation';
import { ITEMS } from '../navigation';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}

  /* getNavigation with RxJs 'of()'*/
  getNavigation(): Observable<ItemNavigation[]> {
    const data = of(ITEMS);
    console.log('get data!');
    return data;
  }
}
