import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

/*example components*/
import { CardComponent } from './examples/card/card.component';
import { CardMediaComponent } from './examples/card-media/card-media.component';
import { ToolbarComponent } from './examples/toolbar/toolbar.component';
import { MenuComponent } from './examples/menu/menu.component';
import { IconComponent } from './examples/icon/icon.component';
import { ButtonComponent } from './examples/button/button.component';
import { SlideToggleComponent } from './examples/slide-toggle/slide-toggle.component';

/*shared components*/
import { NavigationComponent } from './shared/navigation/navigation.component';

/*material*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeSwitchComponent } from './shared/theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardMediaComponent,
    ToolbarComponent,
    MenuComponent,
    NavigationComponent,
    IconComponent,
    ButtonComponent,
    SlideToggleComponent,
    ThemeSwitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
