import { PartialType } from '@nestjs/swagger';
import { CreateClinicalAppointmentDto } from './create-clinical-appointment.dto';

export class UpdateClinicalAppointmentDto extends PartialType(CreateClinicalAppointmentDto) {}
