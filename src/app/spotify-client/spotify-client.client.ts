import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyClientClient {
  readonly #apiBaseUrl = `https://api.spotify.com/v1`;
  readonly #http = inject(HttpClient);

  readonly #endpointRecord: Record<string, string> = {
    CURRENT_USER_PLAYLIST: '/me/playlists',
  };

  getCurrentUserPlaylist(params?: HttpParams): Observable<unknown> {
    const endpointUrl =
      `${this.#apiBaseUrl}` + this.#endpointRecord['CURRENT_USER_PLAYLIST'];

    if (params) {
      return this.#http.get(endpointUrl, { params });
    }
    return this.#http.get(endpointUrl);
  }
}
