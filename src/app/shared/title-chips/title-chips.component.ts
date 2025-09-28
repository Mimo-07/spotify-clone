import { Component, Input, output } from '@angular/core';
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

  selectedChip = output<TitleChip>();

  onSelectChip(chip: TitleChip): void {
    this.selectedChip.emit(chip);
  }
}
