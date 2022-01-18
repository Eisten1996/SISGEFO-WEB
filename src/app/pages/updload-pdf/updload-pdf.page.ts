import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updload-pdf',
  templateUrl: './updload-pdf.page.html',
  styleUrls: ['./updload-pdf.page.scss'],
})
export class UpdloadPdfPage implements OnInit {
  reader = new FileReader();
  totalPages: number;
  pdfSrc = '';
  pdf: File;
  nameFile = 'Seleccionar un PDF del dispositivo';

  counter = Array;
  constructor() {}

  ngOnInit() {}

  onUpload(event) {
    this.reader.addEventListener('load', (ev) => {
      this.pdfSrc = ev.target['result'].toString();
    });
    this.pdf = event.target.files.item(0);
    console.log(this.pdf);
    this.nameFile = this.pdf.name;

    this.reader.readAsDataURL(event.target.files[0]);
  }

  // afterLoadComplete(pdfData: any) {
  //   this.totalPages = pdfData.numPages;
  // }
}
