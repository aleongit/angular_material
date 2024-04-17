import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  /* for Dialog elements */
  openDialog() {
    this.dialog.open(DialogElements);
  }

  /* for Dialog animations */
  openDialogAnimation(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimations, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

/* for Dialog elements */
@Component({
  selector: 'dialog-elements',
  templateUrl: 'dialogs/dialog-elements.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
})
export class DialogElements {}

/* for Dialog animations */
@Component({
  selector: 'dialog-animations',
  templateUrl: 'dialogs/dialog-animations.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogAnimations {
  constructor(public dialogRef: MatDialogRef<DialogAnimations>) {}
}
