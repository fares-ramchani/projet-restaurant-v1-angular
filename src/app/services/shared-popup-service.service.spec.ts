import { TestBed } from '@angular/core/testing';

import { SharedPopupServiceService } from './shared-popup-service.service';

describe('SharedPopupServiceService', () => {
  let service: SharedPopupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPopupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
