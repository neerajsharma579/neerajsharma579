import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../auth/authentication.service';
import { IonTextarea } from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'software-settings',
  templateUrl: './software-settings.page.html',
  styleUrls: ['./software-settings.page.scss'],
})
export class SoftwareSettingsPage implements OnInit {
  @ViewChild('remarkTextInput', { static: false, read: IonTextarea })
  remarkTextInput: IonTextarea;
  TokenInfo: any = {};
  CardNumber: string;
  pCardNumber: string = '';
  message: string = '';
  dynamicClass: string = '';
  selectedRadioValue: string = '2';
  purchiCommand: any = [];
  selectedCommandValue: string = '';
  isCartInfo: boolean = false;
  isTruckInfo: boolean = false;
  isPurchiInfo: boolean = false;
  isRemarkVisible: boolean = false;
  growerInfo: any = {};
  lblHeading: string = '';
  lblHeaderHeading: string = '';

  constructor(
    private apiService: ApiService,
    private authenticationService: AuthenticationService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.lblHeaderHeading = 'पर्ची कमांड';
    this.lblHeading = 'पर्ची विवरण';
    this.PurchyCommands();
  }

  ionViewDidEnter() {
    this.remarkTextInput?.setFocus();
  }

  GetTokenDetail(cardNo) {
    this.TokenInfo = {};
    this.apiService
      .GetTokenDetailByCardNo(cardNo, this.selectedRadioValue)
      .subscribe((res: any) => {
        if (res.Data !== null) {
          if (this.selectedRadioValue == '1') {
            this.isCartInfo = true;
          } else if (this.selectedRadioValue == '3') {
            this.isTruckInfo = true;
          } else {
            this.isPurchiInfo = true;
            this.apiService
              .getGrowerInfo(res.Data.Code)
              .subscribe((res: any) => {
                if (res.Data !== null) {
                  this.growerInfo = res.Data;
                }
              });
          }
          this.isRemarkVisible = true;
          this.TokenInfo = res.Data;
        } else {
          this.TokenInfo = {};
          this.message = res.Message;
          this.isRemarkVisible = false;
          this.dynamicClass = 'error';
          if (this.selectedRadioValue == '1') {
            this.isCartInfo = false;
          } else if (this.selectedRadioValue == '3') {
            this.isTruckInfo = false;
          } else {
            this.isPurchiInfo = false;
          }
          return setTimeout(() => {
            this.message = '';
          }, 3000);
        }
      });
  }

  DeleteToken() {
    this.apiService
      .DeleteTokenByCardNumber(this.pCardNumber)
      .subscribe((res: any) => {
        if (res.Data > 0) {
          this.message = res.Message;
          this.dynamicClass = 'success';
          return setTimeout(() => {
            this.message = '';
          }, 3000);
        } else {
          this.message = res.Message;
          this.dynamicClass = 'error';
          return setTimeout(() => {
            this.message = '';
          }, 3000);
        }
      });
  }

  DeleteGross() {
    this.apiService
      .DeleteGrossByCardNumber(this.pCardNumber)
      .subscribe((res: any) => {
        if (res.Data > 0) {
          this.message = res.Message;
          this.dynamicClass = 'success';
          return setTimeout(() => {
            this.message = '';
          }, 3000);
        } else {
          this.message = res.Message;
          this.dynamicClass = 'error';
          return setTimeout(() => {
            this.message = '';
          }, 3000);
        }
      });
  }

  DeleteTare() {
    this.apiService
      .DeleteTareByCardNumber(this.pCardNumber)
      .subscribe((res: any) => {
        if (res.Data > 0) {
          this.message = res.Message;
          this.dynamicClass = 'success';
          return setTimeout(() => {
            this.message = '';
          }, 3000);
        } else {
          this.message = res.Message;
          this.dynamicClass = 'error';
          return setTimeout(() => {
            this.message = '';
          }, 3000);
        }
      });
  }

  radioChangeHandler(event) {
    this.selectedRadioValue = event.target.value;

    if (event.target.value === '1') {
      this.lblHeading = 'कार्ड नंबर';
      this.CardNumber = '';
    }
    if (event.target.value === '2') {
      this.lblHeading = 'पर्ची विवरण';
      this.CardNumber = '';
    }
    if (event.target.value === '3') {
      this.lblHeading = 'ट्रक टोकन विवरण';
      this.CardNumber = '';
    }

    this.isCartInfo = false;
    this.isTruckInfo = false;
    this.isPurchiInfo = false;
    this.isRemarkVisible = false;
  }

  PurchyCommands() {
    this.apiService.GetPurchyCommands().subscribe((res: any) => {
      this.purchiCommand = res.Data;
    });
  }

  anyFunc(event) {
    this.selectedCommandValue = event.target.value;
  }

  showConfirm() {
    this.alertController
      .create({
        header: 'पुष्टि करें',
        //subHeader: 'चलो पुष्टि करते हैं',
        message: 'क्या आपको यकीन है? आप कमांड सबमिट करना चाहते हैं',
        buttons: [
          {
            text: 'ठीक है',
            handler: () => {
              this.submitCommand();
            },
          },
          {
            text: 'रद्द करे',
            handler: () => {
              console.log('Let me think');
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  submitCommand() {
    this.apiService
      .CommandSubmit(
        this.selectedCommandValue,
        this.selectedRadioValue,
        this.CardNumber,
        this.authenticationService.token.Code,
        this.remarkTextInput.value
      )
      .subscribe((res: any) => {
        if (res.StatusCode == 'Success') {
          this.message = 'आपका आदेश सफलतापूर्वक सबमिट कर दिया गया है।';
          this.dynamicClass = 'success';
        } else {
          this.dynamicClass = 'error';
          return setTimeout(() => {
            this.message = 'कुछ गड़बड़ है, कृपया बाद में पुनः प्रयास करें।';
          }, 3000);
        }
      });
  }
}
