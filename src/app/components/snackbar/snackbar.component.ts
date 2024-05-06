import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar) {}

  /* for Basic snack-bar */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  /* for Snack-bar with configurable position */
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBarPosition() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  /* for Snack-bar with a custom component */
  durationInSeconds = 5;
  openSnackBarCustom() {
    this._snackBar.openFromComponent(CustomSnackBar, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

/* for Snack-bar with a custom component */
@Component({
  selector: 'custom-snackbar',
  templateUrl: 'custom.snackbar.html',
  styles: `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  standalone: true,
})
export class CustomSnackBar {}
