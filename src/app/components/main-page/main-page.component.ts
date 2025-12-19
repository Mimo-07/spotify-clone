import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TitleChip } from '../../shared/title-chips/chip.interface';
import { TitleChipsComponent } from '../../shared/title-chips/title-chips.component';

@Component({
  selector: 'main-page',
  imports: [TitleChipsComponent, MatGridListModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
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
    // const previousState = localStorage.getItem('auth_state');
    // const previousVerifier = localStorage.getItem('code_verifier');
    // const returnedData = new URLSearchParams(window.location.search);
    // const returnedState = returnedData.get('state');
    // const returnedCode = returnedData.get('code');
    // if (previousState && previousVerifier && returnedState && returnedCode) {
    //   if (returnedState != previousState) {
    //     this.#router.navigate(['login']);
    //   } else {
    //     this.#tokenService.getToken(returnedCode, previousVerifier).subscribe({
    //       next: (response: LoginResponse) => {
    //         if (response.access_token) {
    //           sessionStorage.setItem(
    //             TokenType.ACCESS_TOKEN,
    //             response.access_token,
    //           );
    //         }
    //         if (response.refresh_token) {
    //           sessionStorage.setItem(
    //             TokenType.REFRESH_TOKEN,
    //             response.refresh_token,
    //           );
    //         }
    //         this.#router
    //           .navigate(['/'], {
    //             queryParams: {},
    //             onSameUrlNavigation: 'reload',
    //             skipLocationChange: true,
    //           })
    //           .then(() => {
    //             this.#router.navigate(['/home']);
    //           });
    //       },
    //     });
    //   }
    // }
  }
}
