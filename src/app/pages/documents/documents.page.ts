import { Component, OnInit } from '@angular/core';
import { docsList } from 'src/app/core/mock/documentsListMock';
import { Document } from 'src/app/core/models/document.model';
import { DocumentService } from 'src/app/core/services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
  // docs: Document[] = docsList;
  docs: any;
  documents: any;

  constructor(private documentService: DocumentService) {}

  async ngOnInit() {
    this.loadDocuments();
  }

  async loadDocuments() {
    this.docs = await this.documentService.getDocumentsManaged();
  }
}
