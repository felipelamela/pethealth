import { Test, TestingModule } from '@nestjs/testing';
import { ClinicalAppointmentController } from './clinical-appointment.controller';
import { ClinicalAppointmentService } from './clinical-appointment.service';

describe('ClinicalAppointmentController', () => {
  let controller: ClinicalAppointmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicalAppointmentController],
      providers: [ClinicalAppointmentService],
    }).compile();

    controller = module.get<ClinicalAppointmentController>(ClinicalAppointmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
