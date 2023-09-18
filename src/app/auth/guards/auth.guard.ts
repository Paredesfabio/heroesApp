import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanMatch {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): Observable<boolean> {
    return this.authService.checkAutehnticationStatus()
      .pipe(
        tap( isAuthenticated => {
          if(!isAuthenticated){
            this.router.navigate(['auth/login'])
          }
        }),
      );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // console.log('canActivate');
    // console.log({route, state})
    return this.checkAuthStatus();
  }
  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    // console.log('canMatch');
    // console.log({route, segments})
    return this.checkAuthStatus();
  }
}
