import { Component } from '@angular/core';
import { merge, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatFormFieldModule,
  FloatLabelType,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  /** for Form field with prefix & suffix */
  hide = true;

  /** for Form field theming */
  colorControl = new FormControl('primary' as ThemePalette);

  /** for Form field with label */
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  /** for Form field with error messages */
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';

  constructor(private _formBuilder: FormBuilder) {
    /** for Form field with error messages */
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      //.pipe(tap(() => console.log(this.email)))
      .subscribe(() => this.updateErrorMessage());
  }

  /** for Form field with label */
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  /** for Form field with error messages */
  updateErrorMessage() {
    //console.log(this.email);
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
}
