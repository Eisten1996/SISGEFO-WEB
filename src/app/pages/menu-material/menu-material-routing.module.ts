import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMaterialPage } from './menu-material.page';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
const routes: Routes = [
  {
    path: 'menu',
    component: MenuMaterialPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'documents',
        loadChildren: () =>
          import('../documents/documents.module').then(
            (m) => m.DocumentsPageModule
          ),
      },
      {
        path: 'uploadPDF',
        loadChildren: () =>
          import('../updload-pdf/updload-pdf.module').then(
            (m) => m.UpdloadPdfPageModule
          ),
      },
      {
        path: 'prints',
        loadChildren: () =>
          import('../prints/prints.module').then((m) => m.PrintsPageModule),
      },
    ],
  },
  { path: '', redirectTo: 'menu/documents' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMaterialPageRoutingModule {}
