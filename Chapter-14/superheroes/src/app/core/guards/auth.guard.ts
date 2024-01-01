import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
// Route guard
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticateService) {}
    // Decides if a route can be activated
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if not authenticated, reroute the user to the login page
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  
}
}
