import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}
  async create(createAddressDto: CreateAddressDto) {
    const ret = await this.addressRepository.save(createAddressDto);
    return ret;
  }

  async findAll() {
    return await this.addressRepository.find();
  }

  async findOne(id: number) {
    return await this.addressRepository.findOne({ where: { Id: id } });
  }

  async updateForUser(updateAddressDto: UpdateAddressDto) {
    return this.addressRepository.save(updateAddressDto);
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    console.log(updateAddressDto);
    return;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
