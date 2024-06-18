import { Injectable } from '@nestjs/common';
import { CreateAddressClinicDto } from './dto/create-address-clinic.dto';
import { UpdateAddressClinicDto } from './dto/update-address-clinic.dto';

@Injectable()
export class AddressClinicService {
  create(createAddressClinicDto: CreateAddressClinicDto) {
    return 'This action adds a new addressClinic';
  }

  findAll() {
    return `This action returns all addressClinic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressClinic`;
  }

  update(id: number, updateAddressClinicDto: UpdateAddressClinicDto) {
    return `This action updates a #${id} addressClinic`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressClinic`;
  }
}
