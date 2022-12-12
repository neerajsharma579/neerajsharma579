import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';
import { IonInput, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('loginInput', { static: false, read: IonInput })
  loginInput: IonInput;
  successMessage = '';
  errorMessage = '';
  gCode: string = '';
  gPassword: string = '';
  gMessage: string = '';
  disableCode: boolean = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private navCtrl: NavController,
    private authenticationService: AuthenticationService
  ) {}

  ionViewDidEnter() {
    this.loginInput?.setFocus();
  }

  ngOnInit() {
    this.gCode = '12';
    this.gPassword = 'naseeb@1234';
    this.setMessage();
  }

  KishaanLogin() {
    this.errorMessage = '';
    if (!this.gCode) {
      this.errorMessage = 'सर्वे नंबर / किसान कोड आवश्यक';
      return setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
    if (!this.gPassword) {
      this.errorMessage = 'पासवर्ड आवश्यक';
      return setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
    this.apiService.GrowerLogin(this.gCode, this.gPassword).subscribe(
      (res: any) => {
        console.log('res', res);

        if (res.StatusCode == 'OK') {
          this.authenticationService.token = res.Data;
          if (res.Data.ChangePassword == 'Y') {
            this.router.navigateByUrl('/changepassword');
          } else {
            window.localStorage.setItem('usertype', 'GR');
            window.localStorage.setItem('username', this.gCode);
            window.localStorage.setItem('password', this.gPassword);
            this.router.navigateByUrl('/dashboard');
          }
        } else {
          this.errorMessage = res.Message;
        }
      },
      (err) => {
        this.errorMessage = 'उपयोगकर्ता नाम या पासवर्ड अमान्य';
        return setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    );
  }

  KaramchariLogin() {
    this.errorMessage = '';
    if (!this.gCode) {
      this.errorMessage = 'सर्वे नंबर / किसान कोड भरे!';
      return setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
    if (!this.gPassword) {
      this.errorMessage = 'पासवर्ड भरे';
      return setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }

    this.apiService.UserLogin(this.gCode, this.gPassword).subscribe(
      (res: any) => {
        if (res.StatusCode == 'OK') {
          this.authenticationService.token = res.Data;
          window.localStorage.setItem('usertype', 'KM');
          window.localStorage.setItem('username', this.gCode);
          window.localStorage.setItem('password', this.gPassword);
          this.router.navigateByUrl('/dashboard');
        } else {
          this.errorMessage = res.Message;
        }
      },
      (err) => {
        this.errorMessage = 'उपयोगकर्ता नाम या पासवर्ड अमान्य';
        return setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    );
  }

  GuestLogin() {
    this.errorMessage = '';
    this.apiService.GuestLogin().subscribe(
      (res: any) => {
        if (res.StatusCode == 'OK') {
          window.localStorage.setItem('usertype', 'GT');
          this.authenticationService.token = res.Data;
          this.router.navigateByUrl('/dashboard');
        } else {
          this.errorMessage = res.Message;
        }
      },
      (err) => {
        this.errorMessage = 'उपयोगकर्ता नाम या पासवर्ड अमान्य';
      }
    );
  }

  setMessage() {
    this.apiService.getMessage().subscribe(
      (res: any) => {
        if (res.StatusCode == 'OK') {
          this.gMessage = res.Data.MessageText;
        } else {
          this.errorMessage = res.Data;
        }
      },
      (err) => {
        this.errorMessage = '';
      }
    );
  }
}
