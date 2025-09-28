export interface LoginResponse {
  access_token?: string;
  token_type?: string;
  scope?: string;
  expires_in?: number;
  refresh_token?: string;
}

export const spotifyUrl = `https://accounts.spotify.com`;
export const clientId = 'b2d05899662949fa98def1614cb83b8c';
