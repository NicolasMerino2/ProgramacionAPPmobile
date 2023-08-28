import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
    {
    path: '',  
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)

  },
  {
    path:'verdurasID',
    loadChildren: () => import('./verduras/verduras.module').then( m => m.VerdurasPageModule)

  }

  ]
},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'verduras',
    loadChildren: () => import('./verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'tiendas',
    loadChildren: () => import('./tiendas/tiendas.module').then( m => m.TiendasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
