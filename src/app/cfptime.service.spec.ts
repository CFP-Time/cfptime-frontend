import { TestBed } from '@angular/core/testing';

import { CfptimeService } from './cfptime.service';

describe('CfptimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CfptimeService = TestBed.get(CfptimeService);
    expect(service).toBeTruthy();
  });
});
