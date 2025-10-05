import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistApiResponse } from '../shared/interfaces/playlist.interface';
import {
  FollowedArtistsApiResponse,
  GetFollowedArtistsRequest,
} from '../shared/interfaces/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyClient {
  readonly #apiBaseUrl = `https://api.spotify.com/v1`;
  readonly #http = inject(HttpClient);

  readonly #endpointRecord: Record<string, string> = {
    CURRENT_USER_PLAYLIST: `/me/playlists`,
    USER_FOLLOWED_ARTISTS: `/me/following`,
    CURRENT_USER_SAVED_ALBUMS: `/me/albums`,
    CURRENT_USER_SAVED_PODCASTS: `/me/audiobooks`,
  };

  getCurrentUserPlaylist(params?: HttpParams): Observable<PlaylistApiResponse> {
    const endpointUrl =
      this.#apiBaseUrl + this.#endpointRecord['CURRENT_USER_PLAYLIST'];

    if (params) {
      return this.#http.get<PlaylistApiResponse>(endpointUrl, { params });
    }
    return this.#http.get<PlaylistApiResponse>(endpointUrl);
  }

  getCurrentUserFollowedArtists(
    params?: HttpParams,
  ): Observable<FollowedArtistsApiResponse> {
    const endpointUrl =
      this.#apiBaseUrl + this.#endpointRecord['USER_FOLLOWED_ARTISTS'];

    if (params) {
      return this.#http.get<FollowedArtistsApiResponse>(endpointUrl, {
        params,
      });
    }

    return this.#http.get<FollowedArtistsApiResponse>(endpointUrl);
  }
}
