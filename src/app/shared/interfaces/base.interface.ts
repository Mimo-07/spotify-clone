export interface Image {
  url: string;
  height: number;
  width: number;
}

export enum RecordType {
  ALBUM = 'album',
  ARTIST = 'artist',
  PLAYLIST = 'playlist',
  AUDIOBOOK = 'podcast',
  MUSIC = 'music',
  ALL = 'all',
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
