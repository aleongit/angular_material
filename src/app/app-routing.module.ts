import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { ChipsComponent } from './components/chips/chips.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TableComponent } from './components/table/table.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'icon', component: IconComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'table', component: TableComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
