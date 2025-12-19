import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
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
