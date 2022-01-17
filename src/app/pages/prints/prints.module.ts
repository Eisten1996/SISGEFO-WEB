import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintsPageRoutingModule } from './prints-routing.module';

import { PrintsPage } from './prints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintsPageRoutingModule
  ],
  declarations: [PrintsPage]
})
export class PrintsPageModule {}
