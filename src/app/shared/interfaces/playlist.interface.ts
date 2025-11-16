import { ExternalUrls, Image, Owner, RecordType } from './base.interface';

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: object;
  type: RecordType;
  uri: string;
}

export interface PlaylistApiResponse {
  href: string;
  limit: number;
  next: string;
  offset: string;
  total: number;
  items: Playlist[];
}
