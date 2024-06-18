import { Test, TestingModule } from '@nestjs/testing';
import { ClinicWorkerService } from './clinic_worker.service';

describe('ClinicWorkerService', () => {
  let service: ClinicWorkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicWorkerService],
    }).compile();

    service = module.get<ClinicWorkerService>(ClinicWorkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
