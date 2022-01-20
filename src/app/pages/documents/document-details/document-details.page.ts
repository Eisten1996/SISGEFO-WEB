import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.page.html',
  styleUrls: ['./document-details.page.scss'],
})
export class DocumentDetailsPage implements OnInit {
  docs: any;
  documentR: any;
  loading = false;
  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute
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
}
