import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { docsList } from 'src/app/core/mock/documentsListMock';
import { Document } from 'src/app/core/models/document.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
  docs: Document[] = docsList;

  constructor(private router: Router) {}

  ngOnInit() {}
}
