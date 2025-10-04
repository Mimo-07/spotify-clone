import { TestBed } from '@angular/core/testing';

import { SpotifyClient } from './spotify-client';

describe('SpotifyClientClient', () => {
  let service: SpotifyClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
