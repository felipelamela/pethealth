import { Test, TestingModule } from '@nestjs/testing';
import { AddressClinicController } from './address-clinic.controller';
import { AddressClinicService } from './address-clinic.service';

describe('AddressClinicController', () => {
  let controller: AddressClinicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressClinicController],
      providers: [AddressClinicService],
    }).compile();

    controller = module.get<AddressClinicController>(AddressClinicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
