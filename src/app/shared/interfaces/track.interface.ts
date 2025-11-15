import { Album, RestrictionReason } from './albums.interface';
import { SimplifiedArtist } from './artist.interface';
import { ExternalUrls, RecordType } from './base.interface';

export interface Track {
  album: Album;
  artists: SimplifiedArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: object;
  external_urls: ExternalUrls;
  href: string;
  is_playable: boolean;
  linked_from: object;
  restrictions: { reason: RestrictionReason };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: RecordType;
  uri: string;
  is_local: boolean;
  id: string;
}

export interface SavedTrack {
  added_at: string;
  track: Track;
}

export interface UserSavedTracksApiResponse {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: SavedTrack[];
}

export type SimplifiedTrack = Pick<
  Track,
  | 'artists'
  | 'available_markets'
  | 'disc_number'
  | 'duration_ms'
  | 'explicit'
  | 'external_urls'
  | 'href'
  | 'id'
  | 'is_playable'
  | 'linked_from'
  | 'restrictions'
  | 'name'
  | 'preview_url'
  | 'track_number'
  | 'type'
  | 'uri'
  | 'is_local'
>;
