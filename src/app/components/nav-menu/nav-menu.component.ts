import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TitleChip } from '../../shared/title-chips/chip.interface';
import { TitleChipsComponent } from '../../shared/title-chips/title-chips.component';
import { ListComponent } from '../../shared/list/list.component';
import { SpotifyWebHelperService } from '../../services/spotify-web-helper.service';
import { AsyncPipe } from '@angular/common';
import { ItemComponent } from '../../shared/item/item.component';
import { BehaviorSubject, EMPTY, forkJoin, map, Observable } from 'rxjs';
import { Item } from '../../shared/interfaces/ui/item.interface';
import { Playlist } from '../../shared/interfaces/playlist.interface';
import { Artist } from '../../shared/interfaces/artist.interface';
import { Album } from '../../shared/interfaces/albums.interface';
import { RecordType } from '../../shared/interfaces/base.interface';

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
export class NavMenuComponent implements OnInit {
  navmenuChips: TitleChip[] = [
    {
      id: RecordType.PLAYLIST,
      displayName: 'Playlists',
    },
    {
      id: RecordType.ARTIST,
      displayName: 'Artists',
    },
    {
      id: RecordType.ALBUM,
      displayName: 'Albums',
    },
    {
      id: RecordType.AUDIOBOOK,
      displayName: 'Podcasts & Shows',
    },
  ];
  fetchNavMenuItems$!: Observable<Item[]>;

  readonly #spotifyWebHelper = inject(SpotifyWebHelperService);

  #allselected: TitleChip = {
    id: RecordType.ALL,
    displayName: 'All',
  };
  #selectedChip = new BehaviorSubject<TitleChip>(this.#allselected);

  ngOnInit(): void {
    this.#selectedChip.subscribe((selected) => {
      if (selected.id === RecordType.ALL) {
        this.fetchNavMenuItems$ = forkJoin([
          this.#spotifyWebHelper.fetchCurrentUserPlaylists(),
          this.#spotifyWebHelper.fetchCurrentUserFollowedArtists(),
          this.#spotifyWebHelper.fetchCurrentUserSavedAlbums(),
        ]).pipe(
          map((responseArray) => {
            return this.#processFetchedItems(responseArray);
          }),
        );
      } else if (selected.id === RecordType.ALBUM) {
        this.fetchNavMenuItems$ = this.#spotifyWebHelper
          .fetchCurrentUserSavedAlbums()
          .pipe(
            map((responseArray) => this.#processFetchedItems([responseArray])),
          );
      } else if (selected.id === RecordType.PLAYLIST) {
        this.fetchNavMenuItems$ = this.#spotifyWebHelper
          .fetchCurrentUserPlaylists()
          .pipe(
            map((responseArray) => this.#processFetchedItems([responseArray])),
          );
      } else if (selected.id === RecordType.ARTIST) {
        this.fetchNavMenuItems$ = this.#spotifyWebHelper
          .fetchCurrentUserFollowedArtists()
          .pipe(
            map((responseArray) => this.#processFetchedItems([responseArray])),
          );
      }
    });
  }

  selectedChip(chip: TitleChip): void {
    this.#selectedChip.next(chip);
  }

  #processFetchedItems(
    responseArray:
      | [Playlist[]]
      | [Artist[]]
      | [Album[]]
      | [Playlist[], Artist[], Album[]],
  ): Item[] {
    return responseArray.flatMap((eachResponse) =>
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
  }
}
