import { inject, Injectable } from '@angular/core';
import { SpotifyClient } from '../spotify-client/spotify-client';
import { map, Observable } from 'rxjs';
import {
  Playlist,
  PlaylistApiResponse,
} from '../shared/interfaces/playlist.interface';
import { HttpParams } from '@angular/common/http';
import {
  Artist,
  FollowedArtistsApiResponse,
} from '../shared/interfaces/artist.interface';
import {
  Album,
  SavedAlbum,
  SavedAlbumsApiResponse,
} from '../shared/interfaces/albums.interface';
import { SimplifiedAudiobook } from '../shared/interfaces/audiobooks.interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyWebHelperService {
  readonly #spotifyClient = inject(SpotifyClient);

  fetchCurrentUserPlaylists(): Observable<Playlist[]> {
    return this.#spotifyClient
      .getCurrentUserPlaylist()
      .pipe(map((response: PlaylistApiResponse) => response.items));
  }

  fetchCurrentUserFollowedArtists(): Observable<Artist[]> {
    const params = new HttpParams().set('type', 'artist');

    return this.#spotifyClient
      .getCurrentUserFollowedArtists(params)
      .pipe(
        map((response: FollowedArtistsApiResponse) => response.artists.items),
      );
  }

  fetchCurrentUserSavedAlbums(): Observable<Album[]> {
    return this.#spotifyClient.getCurrentUserSavedAlbums().pipe(
      map((response: SavedAlbumsApiResponse) => response.items),
      // deconstructing array of SavedAlbum then proceeding to emit only album property of SavedAlbum object excluding added_at property
      map((deconstructRes: SavedAlbum[]) =>
        deconstructRes.map((item) => item.album),
      ),
    );
  }

  fetchCurrentUserSavedAudibooks(): Observable<SimplifiedAudiobook[]> {
    return this.#spotifyClient
      .getCurrentUserSavedAudiobooks()
      .pipe(map((response) => response.items));
  }
}
