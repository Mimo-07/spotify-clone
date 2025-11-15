import { ExternalUrls, Image, RecordType } from './base.interface';

export interface GetFollowedArtistsRequest {
  type: RecordType;
  // after?: string;
  limit: number;
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: object;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: RecordType;
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

export type SimplifiedArtist = Pick<
  Artist,
  'external_urls' | 'href' | 'id' | 'name' | 'type' | 'uri'
>;
