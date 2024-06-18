import { Module } from '@nestjs/common';
import { ClinicalAppointmentService } from './clinical-appointment.service';
import { ClinicalAppointmentController } from './clinical-appointment.controller';

@Module({
  controllers: [ClinicalAppointmentController],
  providers: [ClinicalAppointmentService],
})
export class ClinicalAppointmentModule {}
