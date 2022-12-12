import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'purchy-deposit',
  templateUrl: './purchy-deposit.page.html',
  styleUrls: ['./purchy-deposit.page.scss'],
})
export class PurchyDepositPage implements OnInit {
  growerInfo: any = {};
  gParchiInfo: any = {};
  purchyNumber: string;
  isShow: boolean = false;
  isDisable: boolean = false;
  message: string = '';

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  growerPurchy(pCode) {
    this.isDisable = true;
    this.apiService.GetGrowerPurchyDetails(pCode).subscribe((res: any) => {
      if (res.Data !== null) {
        this.gParchiInfo = res.Data;
        this.apiService
          .getGrowerInfo(this.gParchiInfo.Code)
          .subscribe((res: any) => {
            this.growerInfo = res.Data;

            this.isShow = true;
            this.isDisable = false;
          });
      } else {
        this.message = res.Message; //'दिया गया परची नंबर उपलब्ध नहीं है !!!';
        this.isDisable = false;
        this.isShow = false;
        this.growerInfo = {};

        return setTimeout(() => {
          this.message = '';
        }, 3000);
      }
    });
  }

  depositPurchy(purchyNumber) {
    this.apiService.DepositePurchy(purchyNumber).subscribe((res: any) => {
      if (res.Data > 0) {
        this.purchyNumber = '';
        this.gParchiInfo = {};
        this.growerInfo = {};
        this.message = res.Message;
      }
    });
  }
}
