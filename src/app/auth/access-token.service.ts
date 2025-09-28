import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { clientId, LoginResponse, spotifyUrl } from './auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  readonly #http = inject(HttpClient);

  getToken(code: string, codeVerifier: string): Observable<LoginResponse> {
    const apiUrl = spotifyUrl + `/api/token`;

    const params = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://127.0.0.1:4200/home',
      client_id: clientId,
      code_verifier: codeVerifier,
    };

    const body = new HttpParams({ fromObject: params });
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.#http.post<LoginResponse>(apiUrl, body.toString(), {
      headers: httpHeaders,
    });
  }
}
