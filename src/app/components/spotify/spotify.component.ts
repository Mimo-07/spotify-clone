import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject, signal } from '@angular/core';
import { AppBarComponent } from '../app-bar/app-bar.component';
import { CurrentPlayerComponent } from '../current-player/current-player.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { Router, RouterModule } from '@angular/router';
import { AccessTokenService } from '../../auth/access-token.service';
import { LoginResponse, TokenType } from '../../auth/auth.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spotify',
  imports: [
    AppBarComponent,
    CurrentPlayerComponent,
    NavMenuComponent,
    DragDropModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.scss',
})
export class SpotifyComponent {
  #defaultWidth = 250;
  #router = inject(Router);
  #tokenService = inject(AccessTokenService);

  currentWidthLeft = signal(this.#defaultWidth);
  currentWidthRight = signal(this.#defaultWidth);

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
            if (response.access_token) {
              sessionStorage.setItem(
                TokenType.ACCESS_TOKEN,
                response.access_token,
              );
            }
            if (response.refresh_token) {
              sessionStorage.setItem(
                TokenType.REFRESH_TOKEN,
                response.refresh_token,
              );
            }
            this.#router
              .navigate(['/'], {
                queryParams: {},
                onSameUrlNavigation: 'reload',
                skipLocationChange: true,
              })
              .then(() => {
                this.#router.navigate(['/home']);
              });
          },
        });
      }
    }
  }

  onDragMoved(resizeEvent: CdkDragMove, resizedPane: string) {
    switch (resizedPane) {
      case 'left':
        this.currentWidthLeft.set(resizeEvent.pointerPosition.x);
        break;
      case 'right':
        const container = document.querySelector('.container') as HTMLElement;
        const containerWidth = container.offsetWidth;
        this.currentWidthRight.set(
          containerWidth - resizeEvent.pointerPosition.x,
        );
        break;
    }
    const element = resizeEvent.source.element.nativeElement;
    element.style.transform = 'none';
  }
}
