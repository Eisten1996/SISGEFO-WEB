import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-material',
  templateUrl: './menu-material.page.html',
  styleUrls: ['./menu-material.page.scss'],
})
export class MenuMaterialPage implements OnInit {
  pages = [
    {
      title: 'Documentos',
      subTitle: 'Listado de documentos',
      url: '/SISGEFO/menu/documents',
    },
    {
      title: 'Cargar PDF',
      subTitle: 'Carga PDF',
      url: '/SISGEFO/menu/uploadPDF',
    },
    {
      title: 'Impresiones',
      subTitle: 'Listado de Impresiones',
      url: '/SISGEFO/menu/prints',
    },
  ];

  selectPath = '';
  subTitle = '';
  constructor() {}

  ngOnInit() {
    this.subTitle = this.pages[0].subTitle;
  }
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  changePage(p) {
    this.subTitle = p.subTitle;
    this.sidenav.close();
  }
}
