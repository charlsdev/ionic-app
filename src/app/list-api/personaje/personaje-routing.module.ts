import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajePage } from './personaje.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajePageRoutingModule {}
