import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export interface User {
  name: string;
}

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];

  myControl = new FormControl('');

  //for example 'first'
  myControlFirst = new FormControl('');
  filteredOptions?: Observable<string[]>;

  //for example 'user'
  myControlUser = new FormControl<string | User>('');
  optionsUser: User[] = [
    { name: 'Mary' },
    { name: 'Shelley' },
    { name: 'Igor' },
  ];
  filteredOptionsUser?: Observable<User[]>;

  //for example 'state'
  stateCtrl = new FormControl('');
  filteredStates?: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  //test
  test = [1, 2, 3, 4, 5, 6];

  ngOnInit() {
    //test
    console.log('test!');
    console.log(this.test.slice());
    console.log(
      this.test.filter((value) => {
        return value % 2 === 0;
      })
    );

    //for 'first'
    this.filteredOptions = this.myControlFirst.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '')),
      tap((value) => console.log(value)) // amb tap es pot fer 'console.log' a un observable
    );

    //for 'user'
    this.filteredOptionsUser = this.myControlUser.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name
          ? this._filterUser(name as string)
          : this.optionsUser.slice();
      })
    );

    //for 'states'
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  //for 'first'
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  //for 'user'
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filterUser(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.optionsUser.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  //for 'states'
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
}
