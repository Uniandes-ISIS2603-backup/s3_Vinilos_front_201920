import { TestBed } from '@angular/core/testing';

import { EnvioService } from './envio.service';

describe('EnvioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvioService = TestBed.get(EnvioService);
    expect(service).toBeTruthy();
  });
});
