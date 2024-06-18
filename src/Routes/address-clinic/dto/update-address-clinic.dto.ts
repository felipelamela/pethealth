import { PartialType } from '@nestjs/swagger';
import { CreateAddressClinicDto } from './create-address-clinic.dto';

export class UpdateAddressClinicDto extends PartialType(CreateAddressClinicDto) {}
