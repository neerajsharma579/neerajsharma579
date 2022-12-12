import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'grower-bond',
  templateUrl: './bond.page.html',
  styleUrls: ['./bond.page.scss'],
})
export class BondPage implements OnInit {
  growerInfo: any = {};
  gSurvey: any;
  gCode: string;
  isDisble: boolean = false;

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationService.token.LoginType == 'K') {
      //Kisan login
      this.gCode = this.authenticationService.token.Code;
      this.isDisble = true;
      this.growerInfo = this.apiService.CopyObject(
        this.authenticationService.token
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
      if (this.authenticationService.token.LoginType == 'K') {
        this.loadData();
        return;
      }
      this.apiService.getGrowerInfo(this.gCode).subscribe((res: any) => {
        this.growerInfo = res.Data;
        this.loadData();
      });
    } else {
      this.gSurvey = [];
      this.growerInfo = {};
    }
  }

  loadData(event: any = null) {
    this.apiService.getGSurvey(this.gCode).subscribe((res: any) => {
      this.gSurvey = res.Data;
      if (event) {
        event.target.complete();
      }
    });
  }
}
