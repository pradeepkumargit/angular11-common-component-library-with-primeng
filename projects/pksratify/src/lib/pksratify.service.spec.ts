import { TestBed } from '@angular/core/testing';

import { PksratifyService } from './pksratify.service';

describe('PksratifyService', () => {
  let service: PksratifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PksratifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
