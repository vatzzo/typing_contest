import { TestBed } from '@angular/core/testing';

import { TypingappService } from './typingapp.service';

describe('TypingappService', () => {
  let service: TypingappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
