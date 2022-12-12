import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  COMPANY_MAP = [{ code: 'Gohana', secret: 'Nds#$34' }];
  token = null;

  constructor() {}

  login(code: string, secret: string): Promise<any> {
    let item = this.COMPANY_MAP.find((itm) => itm.code == code);
    if (item && item.secret == secret) {
      this.token = { sub: code, loginDay: new Date().getDate() };
      return Promise.resolve({ status: 'success' });
    } else {
      return Promise.reject('Invalid Credentials');
    }
  }

  hasValidToken() {
    return this.token && this.token.Code;
    //return this.token && this.token.Code; //this.token.AccountNo;
  }

  logout() {
    this.token = null;
  }
}
