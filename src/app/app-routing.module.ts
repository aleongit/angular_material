import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './examples/card/card.component';
import { CardMediaComponent } from './examples/card-media/card-media.component';
import { MenuComponent } from './examples/menu/menu.component';
import { ToolbarComponent } from './examples/toolbar/toolbar.component';
import { IconComponent } from './examples/icon/icon.component';
import { ButtonComponent } from './examples/button/button.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'card-media', component: CardMediaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'icon', component: IconComponent },
  { path: 'button', component: ButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
