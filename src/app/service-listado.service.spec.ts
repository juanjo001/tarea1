import { TestBed } from '@angular/core/testing';

import { ServiceListadoService } from './service-listado.service';

describe('ServiceListadoService', () => {
  let service: ServiceListadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
