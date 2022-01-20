import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute, ParamMap, RouterEvent } from '@angular/router';

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
      icon: 'document-outline',
    },
    {
      title: 'Cargar PDF',
      subTitle: 'Carga PDF',
      url: '/SISGEFO/menu/uploadPDF',
      icon: 'file-tray-full-outline',
    },
    {
      title: 'Impresiones',
      subTitle: 'Listado de Impresiones',
      url: '/SISGEFO/menu/prints',
      icon: 'print-outline',
    },
  ];

  selectPath = '';
  subTitle = '';
  user: any;
  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit() {}
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

  logout() {
    localStorage.removeItem('userData');
    window.location.reload();
  }
}
