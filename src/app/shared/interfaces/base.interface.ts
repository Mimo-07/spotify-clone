export interface Image {
  url: string;
  height: number;
  width: number;
}

export enum RecordType {
  ALBUM = 'album',
  ARTIST = 'artist',
  PLAYLIST = 'playlist',
  AUDIOBOOK = 'audiobook',
  EPISODE = 'episode',
  TRACK = 'track',
  ALL = 'all',
}

export enum RestrictionReason {
  MARKET = 'market',
  PRODUCT = 'product',
  EXPLICIT = 'explicit',
  PAYMENT_REQUIRED = 'payment_required',
}

export interface ExternalUrls {
  spotify: string;
}

export interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string; //The object type. Allowed values: "user"
  uri: string;
  display_name?: string;
}

export interface BaseApiResponse<T> {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: T[];
}

export interface Cursor {
  before: string;
  after: string;
}
