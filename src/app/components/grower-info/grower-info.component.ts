import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'grower-info',
  templateUrl: './grower-info.component.html',
  styleUrls: ['./grower-info.component.scss'],
})
export class GrowerInfoComponent implements OnInit {
  @Input() kisanInfo: any;
  disableCode: boolean = false;
  gDetails: any = {};

  constructor(
    //private apiService: ApiService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.disableCode = this.authenticationService.token.LoginType == 'K';
    console.log(this.kisanInfo);
  }
}
