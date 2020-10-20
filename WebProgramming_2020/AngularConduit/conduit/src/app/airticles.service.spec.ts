import { TestBed } from '@angular/core/testing';

import { AirticlesService } from './airticles.service';

describe('AirticlesService', () => {
  let service: AirticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
