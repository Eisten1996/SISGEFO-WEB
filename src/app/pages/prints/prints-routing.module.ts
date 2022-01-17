import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintsPage } from './prints.page';

const routes: Routes = [
  {
    path: '',
    component: PrintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintsPageRoutingModule {}
