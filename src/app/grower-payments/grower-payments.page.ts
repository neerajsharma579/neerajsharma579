import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'grower-payment',
  templateUrl: './grower-payments.page.html',
  styleUrls: ['./grower-payments.page.scss'],
})
export class GrowerPaymentPage implements OnInit {
  growerInfo: any = {};
  gPaymentInfo: any;
  gCode: string;
  isDisble: boolean = false;
  isShowHide: boolean = false;

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationService.token.LoginType == 'K') {
      this.isDisble = true;
      this.gCode = this.authenticationService.token.Code;
      this.growerInfo = JSON.parse(
        JSON.stringify(this.authenticationService.token)
      );
      this.loadData();
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.loadData(event);
    }, 2000);
  }

  growerData() {
    if (this.gCode !== '' && this.gCode !== null && this.gCode !== undefined) {
      this.apiService.getGrowerInfo(this.gCode).subscribe((res: any) => {
        this.growerInfo = res.Data;
        this.loadData();
      });
    } else {
      this.isShowHide = false;
      this.gPaymentInfo = [];
      this.growerInfo = {};
    }
  }

  loadData(event: any = null) {
    this.apiService.getPaymentInfo(this.gCode).subscribe((res: any) => {
      this.gPaymentInfo = res.Data;
    });

    this.isShowHide = true;

    if (event) {
      event.target.complete();
    }
  }
}
