import { Test, TestingModule } from '@nestjs/testing';
import { AddressClinicService } from './address-clinic.service';

describe('AddressClinicService', () => {
  let service: AddressClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressClinicService],
    }).compile();

    service = module.get<AddressClinicService>(AddressClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
