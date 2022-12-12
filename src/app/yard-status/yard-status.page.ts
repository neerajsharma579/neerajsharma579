import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'yard-status',
  templateUrl: './yard-status.page.html',
  styleUrls: ['./yard-status.page.scss'],
})
export class YardStatusPage implements OnInit {
  growerInfo: any = {};
  gYard: any;
  gCode: string;
  isDisble: boolean = false;

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
    }

    this.loadData();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.loadData(event);
    }, 2000);
  }

  growerData() {
    this.loadData();
  }

  loadData(event: any = null) {
    this.apiService.getYardStatus().subscribe((res: any) => {
      this.gYard = res.Data;
      if (event) {
        event.target.complete();
      }
    });
  }
}
