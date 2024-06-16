import { Test, TestingModule } from '@nestjs/testing';
import { ClinicWorkerController } from './clinic_worker.controller';
import { ClinicWorkerService } from './clinic_worker.service';

describe('ClinicWorkerController', () => {
  let controller: ClinicWorkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicWorkerController],
      providers: [ClinicWorkerService],
    }).compile();

    controller = module.get<ClinicWorkerController>(ClinicWorkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
