import { inject, Injectable } from '@angular/core';
import { SpotifyClient } from '../spotify-client/spotify-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyWebHelperService {
  readonly #spotifyClient = inject(SpotifyClient);

  fetchCurrentUserPlaylists(): Observable<any> {
    return this.#spotifyClient.getCurrentUserPlaylist();
  }
}
