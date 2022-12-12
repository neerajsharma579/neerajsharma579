import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'grower-lbl-info',
  templateUrl: './grower-lbl-info.component.html',
  styleUrls: ['./grower-lbl-info.component.scss'],
})
export class GrowerLblInfoComponent implements OnInit {
  @Input() gInfo: any;
  @Input() showHeader: boolean = true;
  disableCode: boolean = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.disableCode = this.authenticationService.token.LoginType == 'K';
    //this.gInfo = this.authenticationService.token;
    console.log(this.gInfo);
  }
}
