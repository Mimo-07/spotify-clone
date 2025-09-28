import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TitleChip } from '../../shared/title-chips/chip.interface';
import { TitleChipsComponent } from '../../shared/title-chips/title-chips.component';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [MatListModule, TitleChipsComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  navmenuChips: TitleChip[] = [
    {
      id: 'playlists',
      displayName: 'Playlists',
    },
    {
      id: 'artists',
      displayName: 'Artists',
    },
    {
      id: 'albums',
      displayName: 'Albums',
    },
    {
      id: 'audiobooks',
      displayName: 'Podcasts & Shows',
    },
  ];

  selectedChip(chip: TitleChip): void {
    console.log(chip);
  }
}
