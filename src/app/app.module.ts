import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*material*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

/*shared components*/
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ThemeSwitchComponent } from './shared/theme-switch/theme-switch.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';

/*components*/
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TableComponent } from './components/table/table.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    NavigationComponent,
    IconComponent,
    ButtonComponent,
    SlideToggleComponent,
    ThemeSwitchComponent,
    TabsComponent,
    TableComponent,
    DatepickerComponent,
    PageNotFoundComponent,
    HomeComponent,
    //StepperComponent, *standalone
    //ChipsComponent, *standalone
    //AutocompleteComponent *standalone,
    //CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
