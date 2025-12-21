import { Image, RecordType } from '../base.interface';

export interface Item {
  id: string;
  name: string;
  type: RecordType;
  displayName?: string;
  image?: Image;
}
