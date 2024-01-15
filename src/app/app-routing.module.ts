import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'icon', component: IconComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
