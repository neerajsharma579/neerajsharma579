import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = 'http://webapi.gohanasugars.com/api';
  //apiUrl: string = 'http://localhost:61545/api';

  constructor(private http: HttpClient) {}

  public CopyObject(src: any) {
    return JSON.parse(JSON.stringify(src));
  }
  public GrowerLogin(user: string, pass: string) {
    return this.http.post(
      `${this.apiUrl}/Login/ValidateGrower?Code=` + user + '&pwd=' + pass,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public UpdateGrowerPassword(code: string, oldPwd: string, pass: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/SetPassword?code=${code}&oldPwd=${oldPwd}&newPwd=${pass}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public UpdateUserPassword(code: string, oldPwd: string, pass: string) {
    return this.http.post(
      `${this.apiUrl}/User/SetPassword?code=${code}&oldPwd=${oldPwd}&newPwd=${pass}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public UserLogin(user: string, pass: string) {
    return this.http.post(
      `${this.apiUrl}/Login/ValidateUser?Code=` + user + '&pwd=' + pass,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public GuestLogin() {
    return this.http.post(`${this.apiUrl}/Login/ValidateGuest`, null, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  public getGrowerInfo(code: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetByCode?code=${code}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public getGSurvey(code: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetSurvey?code=${code}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public getCrushing() {
    return this.http.post(`${this.apiUrl}/Grower/GetCrushing`, null, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  public getMessage() {
    return this.http.post(`${this.apiUrl}/Login/GetAppMessage`, null, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  public getYardStatus() {
    return this.http.post(`${this.apiUrl}/Grower/GetYardInfo`, null, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  public getCalendarDetails(code: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetCalender?code=${code}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public getCalendarSummary(code: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetCalenderSummary?code=${code}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public getSupply(code: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetSupply?code=${code}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public getNonSupplyCalInfo(code: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetNonSupplyCalender?code=${code}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public getPaymentInfo(code: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetPaymentInfo?code=${code}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public GetGrowerPurchyDetails(pNumber: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetPurchyDetail?PurchyNo=${pNumber}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public DepositePurchy(pNumber: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/DepositPurchy?PurchyNo=${pNumber}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public GetTokenDetailByCardNo(pCardNo: string, selectedValue: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/GetPurchyDetailV2?searchType=${selectedValue}&searchNo=${pCardNo}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public DeleteTokenByCardNumber(pCardNo: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/CancelTokenByCardNo?CardNo=${pCardNo}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public DeleteGrossByCardNumber(pCardNo: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/CancelGrossByCardNo?CardNo=${pCardNo}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public DeleteTareByCardNumber(pCardNo: string) {
    return this.http.post(
      `${this.apiUrl}/Grower/CancelTareByCardNo?CardNo=${pCardNo}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }

  public GetPurchyCommands() {
    return this.http.post(`${this.apiUrl}/Grower/GetPurchyCommands`, null, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  public CommandSubmit(
    cmdType: string,
    srchType: string,
    srchNumber: string,
    usrId: string,
    remark: string
  ) {
    let cType = parseInt(cmdType);
    let sType = parseInt(srchType);
    let uId = parseInt(usrId);
    return this.http.post(
      `${this.apiUrl}/Grower/SubmitPurchyCommand?CommandType=${cType}&SearchType=${sType}&SearchNo=${srchNumber}&UserId=${uId}&Remark=${remark}`,
      null,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }
}
