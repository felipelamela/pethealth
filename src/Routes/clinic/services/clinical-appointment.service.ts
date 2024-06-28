import { Injectable } from '@nestjs/common';
import { CreateClinicalAppointmentDto } from '../dto/create-clinical-appointment.dto';
import { UpdateClinicalAppointmentDto } from '../dto/update-clinical-appointment.dto';

@Injectable()
export class ClinicalAppointmentService {
  create(createClinicalAppointmentDto: CreateClinicalAppointmentDto) {
    console.log(
      '🚀 ~ ClinicalAppointmentService ~ create ~ createClinicalAppointmentDto:',
      createClinicalAppointmentDto,
    );
    return 'This action adds a new clinicalAppointment';
  }

  findAll() {
    return `This action returns all clinicalAppointment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinicalAppointment`;
  }

  update(
    id: number,
    updateClinicalAppointmentDto: UpdateClinicalAppointmentDto,
  ) {
    console.log(
      '🚀 ~ ClinicalAppointmentService ~ updateClinicalAppointmentDto:',
      updateClinicalAppointmentDto,
    );
    return `This action updates a #${id} clinicalAppointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicalAppointment`;
  }
}
