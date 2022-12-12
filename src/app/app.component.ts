import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private _location: Location,
    public alertController: AlertController,
    public apiService: ApiService,
    public authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    debugger;
    let usertype = window.localStorage.getItem('usertype')
      ? window.localStorage.getItem('usertype')
      : '';
    let username = window.localStorage.getItem('username')
      ? window.localStorage.getItem('username')
      : '';
    let password = window.localStorage.getItem('password')
      ? window.localStorage.getItem('password')
      : '';

    if (usertype == 'GR') {
      this.apiService.GrowerLogin(username, password).subscribe((res: any) => {
        if (res.StatusCode == 'OK') {
          this.authenticationService.token = res.Data;
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    } else if (usertype == 'KM') {
      this.apiService.UserLogin(username, password).subscribe((res: any) => {
        if (res.StatusCode == 'OK') {
          this.authenticationService.token = res.Data;
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    } else if (usertype == 'GT') {
      this.apiService.GuestLogin().subscribe((res: any) => {
        if (res.StatusCode == 'OK') {
          this.authenticationService.token = res.Data;
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    } else {
      this.router.navigateByUrl('/login');
    }

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      //console.log('Back press handler!');
      if (
        this._location.isCurrentPathEqualTo('/dashboard') ||
        this._location.isCurrentPathEqualTo('/login')
      ) {
        // Show Exit Alert!
        //console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {
        // Navigate to back page
        //console.log('Navigate to back page');
        this._location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController
        .getTop()
        .then((r) => {
          if (r) {
            navigator['app'].exitApp();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }

  showExitConfirm() {
    this.alertController
      .create({
        header: 'ऐप की समाप्ति',
        message: 'क्या आप ऐप को बंद करना चाहते हैं?',
        backdropDismiss: false,
        buttons: [
          {
            text: 'जारी रखें',
            role: 'रद्द करना',
            handler: () => {
              console.log('Application exit prevented!');
            },
          },
          {
            text: 'बाहर निकलें',
            handler: () => {
              navigator['app'].exitApp();
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
}
