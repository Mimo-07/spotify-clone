import { Injectable, signal } from '@angular/core';
import { base64encode, generateRandomString, hashed } from './auth-pkce';
import { clientId, spotifyUrl } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  startAuth() {
    this.#redirectToAuthCodeFlow();
  }

  readonly #scope: string = `playlist-read-private user-follow-read`;

  async #redirectToAuthCodeFlow() {
    const authState = generateRandomString(16);
    const codeVerifier: string = generateRandomString(128);
    const hashedVerifier = await hashed(codeVerifier);
    const codeChallenge = base64encode(hashedVerifier);

    localStorage.setItem('code_verifier', codeVerifier);
    localStorage.setItem('auth_state', authState);

    // redirecting to spotify login
    const params = {
      response_type: 'code',
      client_id: clientId,
      scope: this.#scope,
      code_challenge_method: 'S256',
      state: authState,
      code_challenge: codeChallenge,
      redirect_uri: 'http://127.0.0.1:4200/home',
    };

    const authLink = new URL(spotifyUrl + `/authorize`);
    authLink.search = new URLSearchParams(params).toString();
    window.location.href = authLink.toString();
  }
}
