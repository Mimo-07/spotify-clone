import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly #authService = inject(AuthService);

  startAuthProcess() {
    this.#authService.startAuth();
  }
}
