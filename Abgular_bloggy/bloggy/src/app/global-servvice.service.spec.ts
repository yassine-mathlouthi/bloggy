import { TestBed } from '@angular/core/testing';

import { GlobalServviceService } from './global-servvice.service';

describe('GlobalServviceService', () => {
  let service: GlobalServviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalServviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
