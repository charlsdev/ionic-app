import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOptionsPage } from './list-options.page';

const routes: Routes = [
   {
      path: '',
      component: ListOptionsPage
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ListOptionsPageRoutingModule {}
