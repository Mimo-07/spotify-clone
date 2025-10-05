import { Image } from './base.interface';

export interface GetFollowedArtistsRequest {
  type: string;
  // after?: string;
  limit: number;
}

export interface Artist {
  external_urls: object;
  followers: object;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface FollowedArtistsResponse {
  href: string;
  limit: number;
  next: string;
  cursors: object;
  total: number;
  items: Artist[];
}

export interface FollowedArtistsApiResponse {
  artists: FollowedArtistsResponse;
}
