import { TestBed } from '@angular/core/testing';

import { ApixuService } from './apixu.service';

describe('ApixuService', () => {
  let service: ApixuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApixuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
