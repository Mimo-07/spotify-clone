import { Component, Input } from '@angular/core';
import { TitleChip } from './chip.interface';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'title-chips',
  imports: [MatChipsModule],
  templateUrl: './title-chips.component.html',
  styleUrl: './title-chips.component.scss',
})
export class TitleChipsComponent {
  @Input({ required: true }) titleChips!: TitleChip[];
}
