import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TitleChip } from '../../shared/title-chips/chip.interface';
import { TitleChipsComponent } from '../../shared/title-chips/title-chips.component';
import { ListComponent } from '../../shared/list/list.component';
import { SpotifyWebHelperService } from '../../services/spotify-web-helper.service';
import { AsyncPipe } from '@angular/common';
import { ItemComponent } from '../../shared/item/item.component';
import { forkJoin, map } from 'rxjs';
import { Item } from '../../shared/interfaces/ui/item.interface';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [
    MatListModule,
    TitleChipsComponent,
    ListComponent,
    ItemComponent,
    AsyncPipe,
  ],
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

  fetchNavMenuItems$ = forkJoin([
    this.#spotifyWebHelper.fetchCurrentUserPlaylists(),
    this.#spotifyWebHelper.fetchCurrentUserFollowedArtists(),
    this.#spotifyWebHelper.fetchCurrentUserSavedAlbums(),
  ]).pipe(
    map((responseArray) => {
      // const changedResponse: Item[]
      const changedResponse = responseArray.flatMap((eachResponse) =>
        eachResponse.map((eachItem) => {
          const changedItem: Item = {} as Item;

          changedItem.id = eachItem.id;
          changedItem.name = eachItem.name;
          changedItem.type = eachItem.type;
          if ('owner' in eachItem) {
            console.log(eachItem.owner);
            // eachItem.type === RecordType.PLAYLIST
            changedItem.displayName = eachItem.owner?.display_name;
          }
          changedItem.image = eachItem.images[0];

          return changedItem;
        }),
      );

      return changedResponse;
    }),
  );

  selectedChip(chip: TitleChip): void {
    // TODO: create a menu service which will handle these fetching calls from spotify client and remove spotify client usage from here
    // only added here for testing purpose
    // this.#spotifyClient.getCurrentUserPlaylist().subscribe({
    //   next: (response) => console.log(response),
    // });
  }
}
