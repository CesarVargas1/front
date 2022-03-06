import { TestBed } from '@angular/core/testing';
import { ContacService } from './contac.service';

describe('ContacService', () => {
  let service: ContacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('ContacService', () => {
  let service: ContacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
