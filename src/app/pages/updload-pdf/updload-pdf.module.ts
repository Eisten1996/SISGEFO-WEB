import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdloadPdfPageRoutingModule } from './updload-pdf-routing.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { UpdloadPdfPage } from './updload-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdloadPdfPageRoutingModule,
    PdfViewerModule,
  ],
  declarations: [UpdloadPdfPage],
})
export class UpdloadPdfPageModule {}
