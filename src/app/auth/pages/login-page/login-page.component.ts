import { Component, OnInit } from '@angular/core';
import { User } from '@auth/interfaces/user.interface';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.login('fabio@gmail.com', '123456')
      .subscribe( user => {
        this.router.navigate(['/']);
      })
  }

}
