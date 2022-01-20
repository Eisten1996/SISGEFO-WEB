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
  constructor(
    private authService: AuthService,
    public alertController: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  login(form) {
    // this.authService.login(form.value).subscribe((res) => {
    //   this.router.navigateByUrl('home');
    // });
    this.auth = form.value;
    if (this.authService.login(this.auth) == null) {
      this.presentAlert();
    } else {
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
