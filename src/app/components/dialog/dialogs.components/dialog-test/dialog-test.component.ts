import { Component, Inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Fruita } from '../../dialog.component';

@Component({
  selector: 'app-dialog-test',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatButtonModule],
  templateUrl: './dialog-test.component.html',
  styleUrl: './dialog-test.component.scss',
})
export class DialogTestComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fruita
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
