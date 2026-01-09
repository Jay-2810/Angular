import { TestBed } from '@angular/core/testing';

import { CustomApi } from './custom-api';

describe('CustomApi', () => {
  let service: CustomApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
