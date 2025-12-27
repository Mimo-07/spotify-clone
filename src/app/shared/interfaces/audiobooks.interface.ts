import {
  BaseApiResponse,
  ExternalUrls,
  Image,
  RecordType,
} from './base.interface';
import { Chapter, SimplifiedChapter } from './chapter.interface';

export interface Audiobook {
  authors: Author[];
  available_markets: string[];
  copyrights: Copyright[];
  description: string;
  html_description: string;
  edition?: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  languages: string[];
  media_type: string;
  name: string;
  narrators: Narrator;
  publisher: string;
  type: RecordType.AUDIOBOOK;
  uri: string;
  total_chapters: number;
  chapters: BaseApiResponse<SimplifiedChapter>;
}

export type SimplifiedAudiobook = Omit<Audiobook, 'chapters'>;

export type GetUserSavedAudiobooksApiResponse =
  BaseApiResponse<SimplifiedAudiobook>;

interface Author {
  name: string;
}

interface Copyright {
  text: string;
  type: string;
}

interface Narrator {
  name: string;
}
