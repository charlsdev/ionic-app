import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
   },
   {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
   },
   {
      path: 'cedula',
      loadChildren: () => import('./list-options/list-options.module').then( m => m.ListOptionsPageModule)
   },
   {
      path: 'api',
      loadChildren: () => import('./list-api/list-api.module').then( m => m.ListApiPageModule)
   },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
   ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
