import { TestBed } from '@angular/core/testing';

import { filmTrackerService } from './film-tracker.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: filmTrackerService = TestBed.get(filmTrackerService);
    expect(service).toBeTruthy();
  });
});
