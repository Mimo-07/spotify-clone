import { SimplifiedArtist } from './artist.interface';
import { ExternalUrls, Image, RecordType } from './base.interface';
import { SimplifiedTrack, UserSavedTracksApiResponse } from './track.interface';

export enum AlbumType {
  ALBUM = 'album',
  SINGLE = 'single',
  COMPILATION = 'compilation',
}

export enum RestrictionReason {
  MARKET = 'market',
  PRODUCT = 'product',
  EXPLICIT = 'explicit',
}

export type AlbumTracks = Pick<
  UserSavedTracksApiResponse,
  'href' | 'limit' | 'next' | 'previous' | 'total'
> & { items: SimplifiedTrack[] };

export interface Album {
  album_type: AlbumType;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: { reason: RestrictionReason };
  type: RecordType;
  uri: string;
  artists: SimplifiedArtist[];
  tracks: AlbumTracks;
  copyrights: { text: string; type: string };
  external_ids: object;
  genres: [];
  popularity: number;
}

export interface SavedAlbum {
  added_at: string;
  album: Album;
}

export interface SavedAlbumsApiResponse {
  href: string;
  limit: number;
  next: string;
  previous: string;
  offset: number;
  total: number;
  items: SavedAlbum[];
}
