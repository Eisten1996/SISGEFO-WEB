import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/core/services/document.service';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-prints',
  templateUrl: './prints.page.html',
  styleUrls: ['./prints.page.scss'],
})
export class PrintsPage implements OnInit {
  docs: any;
  constructor(private printService: PrintService) {}

  ngOnInit() {
    this.loadDocuments();
  }

  async loadDocuments() {
    this.docs = await this.printService.getPrints();
    console.log(this.docs);
  }
}
