import { Audiobook, SimplifiedAudiobook } from './audiobooks.interface';
import {
  ExternalUrls,
  Image,
  RecordType,
  RestrictionReason,
} from './base.interface';

export interface Chapter {
  audio_preview_url: string | null;
  available_markets?: string[];
  chapter_number: number;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: ResumePoint;
  type: RecordType.EPISODE;
  uri: string;
  restrictions: { reason: RestrictionReason };
  audiobook: SimplifiedAudiobook;
}

interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

export type SimplifiedChapter = Omit<Chapter, 'audiobook'>;
