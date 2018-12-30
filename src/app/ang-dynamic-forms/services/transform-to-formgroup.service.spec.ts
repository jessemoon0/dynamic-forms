import { TestBed, inject } from '@angular/core/testing';

import { TransformToFormgroupService } from './transform-to-formgroup.service';

describe('TransformToFormgroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformToFormgroupService]
    });
  });

  it('should be created', inject([TransformToFormgroupService], (service: TransformToFormgroupService) => {
    expect(service).toBeTruthy();
  }));
});
