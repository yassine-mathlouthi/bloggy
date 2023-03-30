import { TestBed } from '@angular/core/testing';

import { LikeBlogService } from './like-blog.service';

describe('LikeBlogService', () => {
  let service: LikeBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
