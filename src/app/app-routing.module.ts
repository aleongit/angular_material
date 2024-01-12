import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './examples/card/card.component';
import { CardMediaComponent } from './examples/card-media/card-media.component';
import { MenuComponent } from './examples/menu/menu.component';
import { ToolbarComponent } from './examples/toolbar/toolbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'card-media', component: CardMediaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'toolbar', component: ToolbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
