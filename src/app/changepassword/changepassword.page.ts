import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  successMessage = '';
  errorMessage = '';
  curPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  growerInfo: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.growerInfo = this.authenticationService.token;
  }

  UpdatePassword() {
    this.errorMessage = '';
    if (!this.curPassword) {
      this.errorMessage = 'पासवर्ड आवश्यक';
      return;
    }
    if (!this.confirmPassword) {
      this.errorMessage = 'पासवर्ड आवश्यक';
      return;
    }
    if (this.newPassword != this.confirmPassword) {
      this.errorMessage = 'नया और कन्फर्म पासवर्ड समान नहीं है';
      return;
    }

    this.apiService
      .UpdateGrowerPassword(
        this.growerInfo.Code,
        this.curPassword,
        this.newPassword
      )
      .subscribe(
        (res: any) => {
          console.log('res', res);

          if (res.StatusCode == 'OK') {
            this.authenticationService.token = res.Data;
            this.router.navigateByUrl('/dashboard');
          } else {
            this.errorMessage = res.Message;
          }
        },
        (err) => {
          this.errorMessage = 'उपयोगकर्ता नाम या पासवर्ड अमान्य';
          //this.error("Username or Password invalid");
        }
      );
  }
}
