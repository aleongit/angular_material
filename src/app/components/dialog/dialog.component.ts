import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/* for Dialog Overview */
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  /* for Dialog Overview */
  animal?: string;
  name?: string;

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

  /* for Dialog Overview */
  openDialogOverview(): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
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

/* for Dialog Overview */
@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialogs/dialog-overview.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverview {
  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
