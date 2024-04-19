import { Component } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {}
