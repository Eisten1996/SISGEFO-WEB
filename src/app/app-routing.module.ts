import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'SISGEFO',
    loadChildren: () =>
      import('./pages/menu-material/menu-material.module').then(
        (m) => m.MenuMaterialPageModule
      ),
  },
  {
    path: 'prints',
    loadChildren: () => import('./pages/prints/prints.module').then( m => m.PrintsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
