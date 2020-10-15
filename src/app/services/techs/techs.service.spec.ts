import { TestBed } from '@angular/core/testing';

import { TechsService } from './techs.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


describe('TechsService', () => {
  let service: TechsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TechsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
