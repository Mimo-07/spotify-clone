import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistApiResponse } from '../shared/interfaces/playlist.interface';
import {
  FollowedArtistsApiResponse,
  GetFollowedArtistsRequest,
} from '../shared/interfaces/artist.interface';
import { SavedAlbumsApiResponse } from '../shared/interfaces/albums.interface';

interface SpotifyEndpointKeys {
  CURRENT_USER_PLAYLIST?: string;
  CURRENT_USER_FOLLOWED_ARTISTS?: string;
  CURRENT_USER_SAVED_ALBUMS?: string;
  CURRENT_USER_SAVED_PODCASTS?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SpotifyClient {
  readonly #apiBaseUrl = `https://api.spotify.com/v1`;
  readonly #http = inject(HttpClient);

  readonly #endpointRecord: SpotifyEndpointKeys = {
    CURRENT_USER_PLAYLIST: `/me/playlists`,
    CURRENT_USER_FOLLOWED_ARTISTS: `/me/following`,
    CURRENT_USER_SAVED_ALBUMS: `/me/albums`,
    CURRENT_USER_SAVED_PODCASTS: `/me/audiobooks`,
  };

  getCurrentUserPlaylist(params?: HttpParams): Observable<PlaylistApiResponse> {
    const endpointUrl =
      this.#apiBaseUrl + this.#endpointRecord.CURRENT_USER_PLAYLIST;

    if (params) {
      return this.#http.get<PlaylistApiResponse>(endpointUrl, { params });
    }
    return this.#http.get<PlaylistApiResponse>(endpointUrl);
  }

  getCurrentUserFollowedArtists(
    params?: HttpParams,
  ): Observable<FollowedArtistsApiResponse> {
    const endpointUrl =
      this.#apiBaseUrl + this.#endpointRecord.CURRENT_USER_FOLLOWED_ARTISTS;

    if (params) {
      return this.#http.get<FollowedArtistsApiResponse>(endpointUrl, {
        params,
      });
    }

    return this.#http.get<FollowedArtistsApiResponse>(endpointUrl);
  }

  getCurrentUserSavedAlbums(
    params?: HttpParams,
  ): Observable<SavedAlbumsApiResponse> {
    const endpointUrl =
      this.#apiBaseUrl + this.#endpointRecord.CURRENT_USER_SAVED_ALBUMS;

    if (params) {
      return this.#http.get<SavedAlbumsApiResponse>(endpointUrl, { params });
    }

    return this.#http.get<SavedAlbumsApiResponse>(endpointUrl);
  }
}
