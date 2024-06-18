import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicWorkerService } from './clinic_worker.service';
import { CreateClinicWorkerDto } from './dto/create-clinic_worker.dto';
import { UpdateClinicWorkerDto } from './dto/update-clinic_worker.dto';

@Controller('clinic-worker')
export class ClinicWorkerController {
  constructor(private readonly clinicWorkerService: ClinicWorkerService) {}

  @Post()
  create(@Body() createClinicWorkerDto: CreateClinicWorkerDto) {
    return this.clinicWorkerService.create(createClinicWorkerDto);
  }

  @Get()
  findAll() {
    return this.clinicWorkerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicWorkerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClinicWorkerDto: UpdateClinicWorkerDto) {
    return this.clinicWorkerService.update(+id, updateClinicWorkerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicWorkerService.remove(+id);
  }
}
