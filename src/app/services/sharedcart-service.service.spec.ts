import { TestBed } from '@angular/core/testing';

import { SharedcartServiceService } from './sharedcart-service.service';

describe('SharedcartServiceService', () => {
  let service: SharedcartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedcartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
