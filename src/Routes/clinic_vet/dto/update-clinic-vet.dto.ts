import { PartialType } from '@nestjs/swagger';
import { CreateClinicVetDto } from './create-clinic-vet.dto';

export class UpdateClinicVetDto extends PartialType(CreateClinicVetDto) {}
