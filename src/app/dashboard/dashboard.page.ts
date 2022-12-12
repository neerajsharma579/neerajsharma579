import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  accessType: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.accessType = this.authenticationService.token.AccessType;
  }

  NextScreen(val) {
    if (val == 'survey') {
      this.router.navigateByUrl('/survey');
    } else if (val == 'bond') {
      this.router.navigateByUrl('/bond');
    } else if (val == 'yard') {
      this.router.navigateByUrl('/yard-status');
    } else if (val == 'crushing') {
      this.router.navigateByUrl('/crushing-info');
    } else if (val == 'purchy-status') {
      this.router.navigateByUrl('/purchy-status');
    } else if (val == 'purchy-deposit') {
      this.router.navigateByUrl('/purchy-deposit');
    } else if (val == 'grower-payment') {
      this.router.navigateByUrl('/grower-payment');
    } else if (val == 'scontrol') {
      this.router.navigateByUrl('/software-settings');
    } else {
      this.router.navigateByUrl('/changepassword');
    }
  }

  logout() {
    this.authenticationService.logout();
    window.localStorage.removeItem('usertype');
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    this.router.navigateByUrl('/login');
  }
}
