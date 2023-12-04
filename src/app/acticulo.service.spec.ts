import { TestBed } from '@angular/core/testing';

import { ActiculoService } from './acticulo.service';

describe('ActiculoService', () => {
  let service: ActiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
