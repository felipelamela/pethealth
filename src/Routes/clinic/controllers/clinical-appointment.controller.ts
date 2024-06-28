import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClinicalAppointmentService } from '../services/clinical-appointment.service';
import { CreateClinicalAppointmentDto } from '../dto/create-clinical-appointment.dto';
import { UpdateClinicalAppointmentDto } from '../dto/update-clinical-appointment.dto';

@Controller('clinical-appointment')
export class ClinicalAppointmentController {
  constructor(
    private readonly clinicalAppointmentService: ClinicalAppointmentService,
  ) {}

  @Post()
  create(@Body() createClinicalAppointmentDto: CreateClinicalAppointmentDto) {
    return this.clinicalAppointmentService.create(createClinicalAppointmentDto);
  }

  @Get()
  findAll() {
    return this.clinicalAppointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicalAppointmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClinicalAppointmentDto: UpdateClinicalAppointmentDto,
  ) {
    return this.clinicalAppointmentService.update(
      +id,
      updateClinicalAppointmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicalAppointmentService.remove(+id);
  }
}
