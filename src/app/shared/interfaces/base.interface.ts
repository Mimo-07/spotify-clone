export interface Image {
  url: string;
  height: number;
  width: number;
}

export enum RecordType {
  ALBUM = 'album',
  ARTIST = 'artist',
  PLAYLIST = 'playlist',
}

export interface ExternalUrls {
  spotify: string;
}
