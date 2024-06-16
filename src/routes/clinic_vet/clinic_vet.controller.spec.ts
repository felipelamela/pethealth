import { Test, TestingModule } from '@nestjs/testing';
import { ClinicVetController } from './clinic_vet.controller';
import { ClinicVetService } from './clinic_vet.service';

describe('ClinicVetController', () => {
  let controller: ClinicVetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicVetController],
      providers: [ClinicVetService],
    }).compile();

    controller = module.get<ClinicVetController>(ClinicVetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
