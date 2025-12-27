import { Album } from './albums.interface';
import { SimplifiedArtist } from './artist.interface';
import {
  BaseApiResponse,
  ExternalUrls,
  RecordType,
  RestrictionReason,
} from './base.interface';

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
  type: RecordType.TRACK;
  uri: string;
  is_local: boolean;
  id: string;
}

export interface SavedTrack {
  added_at: string;
  track: Track;
}

export type UserSavedTracksApiResponse = BaseApiResponse<SavedTrack>;

export type SimplifiedTrack = Omit<
  Track,
  'album' | 'external_ids' | 'popularity'
>;
