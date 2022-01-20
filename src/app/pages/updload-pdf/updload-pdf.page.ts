import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from 'src/app/core/models/document.model';
import { Print } from 'src/app/core/models/print.model';
import { DocumentService } from 'src/app/core/services/document.service';
import { PrintService } from 'src/app/core/services/print.service';

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
  loading = false;
  showInputs = false;
  typePrint = '';
  pagsPrints = '';
  documentUpload: Document;
  print: Print;

  counter = Array;
  constructor(
    private documentService: DocumentService,
    private router: Router,
    private printService: PrintService
  ) {}

  ngOnInit() {}

  onUpload(event) {
    this.loading = true;
    this.reader.addEventListener('load', (ev) => {
      this.pdfSrc = ev.target['result'].toString();
    });
    this.pdf = event.target.files.item(0);
    console.log(this.pdf);

    this.nameFile = this.pdf.name;

    this.reader.readAsDataURL(event.target.files[0]);
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    console.log(this.totalPages);
    this.loading = false;
    this.showInputs = true;
  }

  loadPDF() {
    this.documentUpload = {
      file: this.pdf,
      typePrint: this.typePrint,
      rangPags: this.pagsPrints,
      name: this.nameFile,
      pags: this.totalPages,
    };
    this.documentService.uploadDocument(this.documentUpload).subscribe(
      (data) => {
        console.log(data);
        this.print = {
          id: data.id,
          origin: 'UPLOADED',
        };
        this.printService.print(this.print).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/SISGEFO']);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
