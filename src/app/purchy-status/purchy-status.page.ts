import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'purchy-status',
  templateUrl: './purchy-status.page.html',
  styleUrls: ['./purchy-status.page.scss'],
})
export class PurchyStatusPage implements OnInit {
  growerInfo: any = [];
  parchiDetails: any = {};
  calendarDetails: any = [];
  calSupply: any = [];
  calSummary: any = {};
  nonSupCalInfo: any = [];
  gCode: string;
  isDisble: boolean = false;
  disableCode: boolean = false;
  accorVal: any = [];
  gInfoClone: any = [];
  isShowHide: boolean = false;
  isLoader: boolean = false;

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationService.token.LoginType == 'K') {
      this.gCode = this.authenticationService.token.Code;
      this.isDisble = true;
      this.loadData();

      this.apiService.getCalendarSummary(this.gCode).subscribe((res: any) => {
        this.calSummary = res.Data;
      });
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.loadData(event);
    }, 2000);
  }

  loadData(event: any = null) {
    this.isLoader = true;
    if (this.gCode !== null && this.gCode !== '' && this.gCode !== undefined) {
      const calInfo = this.apiService.getCalendarDetails(this.gCode);
      const calSum = this.apiService.getCalendarSummary(this.gCode);
      const growerInfo = this.apiService.getGrowerInfo(this.gCode);
      const supplyInfo = this.apiService.getSupply(this.gCode);
      const nonSupplyInfo = this.apiService.getNonSupplyCalInfo(this.gCode);

      forkJoin([
        calInfo,
        calSum,
        growerInfo,
        supplyInfo,
        nonSupplyInfo,
      ]).subscribe((res: any) => {
        if (res !== null) {
          this.calendarDetails = res[0].Data;
          this.calSummary = res[1].Data;
          this.growerInfo = res[2].Data;
          this.calSupply = res[3].Data;
          this.nonSupCalInfo = res[4].Data;
          this.isShowHide = true;
          this.accorVal = ['first'];
          this.isLoader = false;
          if (event) {
            event.target.complete();
          }
        } else {
          this.isShowHide = false;
          this.isLoader = false;
        }
      });
    } else {
      this.isShowHide = false;
      this.isLoader = false;
    }
  }
}
