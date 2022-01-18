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
  constructor(private router: Router) {}

  ngOnInit() {
    // this.subTitle = this.pages[0].subTitle;
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectPath = event.url;
      switch (this.selectPath) {
        case this.pages[0].url:
          this.subTitle = this.pages[0].subTitle;
          break;
        case this.pages[1].url:
          this.subTitle = this.pages[1].subTitle;
          break;
        case this.pages[2].url:
          this.subTitle = this.pages[2].subTitle;
          break;
      }
    });
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
