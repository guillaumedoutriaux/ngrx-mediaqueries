import { TestBed } from '@angular/core/testing';

import { NgrxMediaqueriesService } from './ngrx-mediaqueries.service';

describe('NgrxMediaqueriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxMediaqueriesService = TestBed.get(NgrxMediaqueriesService);
    expect(service).toBeTruthy();
  });
});
