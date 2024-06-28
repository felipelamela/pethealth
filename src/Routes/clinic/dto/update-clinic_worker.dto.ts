import { PartialType } from '@nestjs/swagger';
import { CreateClinicWorkerDto } from './create-clinic_worker.dto';

export class UpdateClinicWorkerDto extends PartialType(CreateClinicWorkerDto) {}
