import { TestBed } from '@angular/core/testing';

import { MockQuote } from './MockQuote';

describe('MockQuote', () => {
  let service: MockQuote;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockQuote);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
