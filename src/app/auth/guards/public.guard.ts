import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { Observable, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  private checkAuthStatus(): Observable<boolean> {
    return this.authService.checkAutehnticationStatus()
      .pipe(
        tap( isAuthenticated => {
          if(isAuthenticated){
            this.router.navigate(['/'])
          }
        }),
        map( isAuthenticated => !isAuthenticated ),
      );
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.checkAuthStatus();
  }

}
