import { TestBed } from '@angular/core/testing';

import { SpotifyWebHelperService } from './spotify-web-helper.service';

describe('SpotifyWebHelperService', () => {
  let service: SpotifyWebHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyWebHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
