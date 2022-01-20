import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocumentsManaged() {
    return this.http
      .get<Document[]>(`${environment.API_PHOTOCOPIER}/managed-documents`)
      .toPromise();
  }

  getDocuments() {
    return this.http
      .get(`${environment.API_PHOTOCOPIER}/uploaded-documents`)
      .toPromise();
  }

  uploadDocument(document: Document) {
    console.log(document);
    const formData = new FormData();
    formData.append('file', document.file);
    formData.append('fileName', document.name);
    formData.append('pagesPrint', document.rangPags);
    formData.append('pages', document.pags.toString());
    console.log(`${environment.API_PHOTOCOPIER}/uploaded-documents`);

    return this.http.post<Document>(
      `${environment.API_PHOTOCOPIER}/uploaded-documents`,
      formData
    );
  }
}
