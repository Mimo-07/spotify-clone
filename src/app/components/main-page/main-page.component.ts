import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessTokenService } from '../../auth/access-token.service';
import { LoginResponse } from '../../auth/auth.interface';

@Component({
  selector: 'main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  #router = inject(Router);
  #tokenService = inject(AccessTokenService);

  ngOnInit(): void {
    const previousState = localStorage.getItem('auth_state');
    const previousVerifier = localStorage.getItem('code_verifier');

    const returnedData = new URLSearchParams(window.location.search);
    const returnedState = returnedData.get('state');
    const returnedCode = returnedData.get('code');

    if (previousState && previousVerifier && returnedState && returnedCode) {
      if (returnedState != previousState) {
        this.#router.navigate(['login']);
      } else {
        this.#tokenService.getToken(returnedCode, previousVerifier).subscribe({
          next: (response: LoginResponse) => {
            console.log(response);
          },
        });
      }
    }
  }
}
