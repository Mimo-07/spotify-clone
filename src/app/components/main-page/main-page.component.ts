import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { AccessTokenService } from '../../auth/access-token.service';
import { LoginResponse } from '../../auth/auth.interface';
import { AuthService } from '../../auth/auth-service';
import { TitleChip } from '../../shared/title-chips/chip.interface';
import { TitleChipsComponent } from '../../shared/title-chips/title-chips.component';

@Component({
  selector: 'main-page',
  imports: [TitleChipsComponent, MatGridListModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  #router = inject(Router);
  #tokenService = inject(AccessTokenService);
  #authService = inject(AuthService);

  mainPageChips: TitleChip[] = [
    {
      id: 'all',
      displayName: 'All',
    },
    {
      id: 'music',
      displayName: 'Music',
    },
    {
      id: 'audiobooks',
      displayName: 'Podcasts',
    },
  ];

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
            this.#authService.isLoggedIn.set(true);
            this.#tokenService.accessTokenResponse.set(response);
          },
        });
      }
    }
  }
}
