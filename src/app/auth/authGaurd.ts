import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGaurd implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Set IsLoggedIn if user has been authenticated before

    if (this.authenticationService.hasValidToken()) {
      return true;
    } else {
      this.authenticationService.logout();
    }
    this.router.navigate(['login']);
    return false;
  }
}
