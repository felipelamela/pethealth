import { Test, TestingModule } from '@nestjs/testing';
import { ClinicalAppointmentService } from './clinical-appointment.service';

describe('ClinicalAppointmentService', () => {
  let service: ClinicalAppointmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicalAppointmentService],
    }).compile();

    service = module.get<ClinicalAppointmentService>(ClinicalAppointmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
