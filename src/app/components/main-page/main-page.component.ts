import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TitleChip } from '../../shared/title-chips/chip.interface';
import { TitleChipsComponent } from '../../shared/title-chips/title-chips.component';
import { RecordType } from '../../shared/interfaces/base.interface';

@Component({
  selector: 'main-page',
  imports: [TitleChipsComponent, MatGridListModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  mainPageChips: TitleChip[] = [
    {
      id: RecordType.ALL,
      displayName: 'All',
    },
    {
      id: RecordType.MUSIC,
      displayName: 'Music',
    },
    {
      id: RecordType.AUDIOBOOK,
      displayName: 'Podcasts',
    },
  ];

  ngOnInit(): void {}
}
