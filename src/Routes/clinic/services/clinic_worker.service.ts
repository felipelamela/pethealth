import { Injectable } from '@nestjs/common';
import { CreateClinicWorkerDto } from '../dto/create-clinic_worker.dto';
import { UpdateClinicWorkerDto } from '../dto/update-clinic_worker.dto';

@Injectable()
export class ClinicWorkerService {
  create(createClinicWorkerDto: CreateClinicWorkerDto) {
    return 'This action adds a new clinicWorker';
  }

  findAll() {
    return `This action returns all clinicWorker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinicWorker`;
  }

  update(id: number, updateClinicWorkerDto: UpdateClinicWorkerDto) {
    return `This action updates a #${id} clinicWorker`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicWorker`;
  }
}
