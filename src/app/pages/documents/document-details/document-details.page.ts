import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Print } from 'src/app/core/models/print.model';
import { DocumentService } from 'src/app/core/services/document.service';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.page.html',
  styleUrls: ['./document-details.page.scss'],
})
export class DocumentDetailsPage implements OnInit {
  docs: any;
  documentR: any;
  typePrint: string;
  typePay: string;
  loading = false;
  copy: number = 1;
  precio: number;
  file: File;
  documentUpload: any;

  print: Print;
  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router,
    private printService: PrintService
  ) {}

  async ngOnInit() {
    const docId = this.route.snapshot.paramMap.get('id');
    console.log(docId);
    await this.loadDocuments();
    console.log(this.docs);

    this.documentR = this.docs.filter((doc) => doc.id == docId)[0];
    this.loading = true;
    console.log(this.documentR);
  }

  async loadDocuments() {
    this.docs = await this.documentService.getDocumentsManaged();
  }

  send() {
    this.documentUpload = {
      file: this.documentR.file,
      typePrint: this.typePrint,
      title: this.documentR.title,
      fileName: this.documentR.fileName,
      pages: this.documentR.pages,
      description: this.documentR.description,
    };

    this.documentService.uploadDocumentManaged(this.documentUpload).subscribe(
      (data) => {
        console.log(data);
        this.print = {
          id: data.id,
          origin: 'MANAGED',
        };
        this.printService.print(this.print).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/SISGEFO/menu/prints']);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
