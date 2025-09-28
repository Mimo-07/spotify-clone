import { TestBed } from '@angular/core/testing';

import { SpotifyClientClient } from './spotify-client.client';

describe('SpotifyClientClient', () => {
  let service: SpotifyClientClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyClientClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
