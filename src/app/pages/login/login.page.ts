import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Auth } from 'src/app/core/models/auth.models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  auth: Auth;
  user: any;
  constructor(
    private authService: AuthService,
    public alertController: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  async login(form) {
    this.auth = form.value;
    this.user = await this.authService.login(this.auth);
    if (this.user.id == null) {
      this.presentAlert();
    } else {
      localStorage.setItem('userData', JSON.stringify(this.user));
      window.location.reload();
      this.router.navigate(['/SISGEFO']);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Email o contraseñas incorrectas',
      message: 'Intente nuevamente',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
