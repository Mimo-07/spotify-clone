import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth-service';
import { CurrentPlayerComponent } from './components/current-player/current-player.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    AppBarComponent,
    CurrentPlayerComponent,
    NavMenuComponent,
    DragDropModule,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly #authService = inject(AuthService);

  readonly isLoggedIn = this.#authService.isLoggedIn;

  #defaultWidth = 250;

  currentWidthLeft = signal(this.#defaultWidth);
  currentWidthRight = signal(this.#defaultWidth);

  ngOnInit(): void {}

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
