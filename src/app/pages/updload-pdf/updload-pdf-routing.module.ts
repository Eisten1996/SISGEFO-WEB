import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdloadPdfPage } from './updload-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: UpdloadPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdloadPdfPageRoutingModule {}
