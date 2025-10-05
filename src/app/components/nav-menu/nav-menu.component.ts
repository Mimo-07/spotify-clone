import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TitleChip } from '../../shared/title-chips/chip.interface';
import { TitleChipsComponent } from '../../shared/title-chips/title-chips.component';
import { ListComponent } from '../../shared/list/list.component';
import { SpotifyWebHelperService } from '../../services/spotify-web-helper.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [MatListModule, TitleChipsComponent, ListComponent, AsyncPipe],
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

  readonly #spotifyWebHelper = inject(SpotifyWebHelperService);

  fetchCurrentUserPlaylists$ =
    this.#spotifyWebHelper.fetchCurrentUserPlaylists();

  fetchCurrentUserFollowedArtists$ =
    this.#spotifyWebHelper.fetchCurrentUserFollowedArtists();

  selectedChip(chip: TitleChip): void {
    // TODO: create a menu service which will handle these fetching calls from spotify client and remove spotify client usage from here
    // only added here for testing purpose
    // this.#spotifyClient.getCurrentUserPlaylist().subscribe({
    //   next: (response) => console.log(response),
    // });
  }
}
