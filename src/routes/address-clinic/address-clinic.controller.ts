import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressClinicService } from './address-clinic.service';
import { CreateAddressClinicDto } from './dto/create-address-clinic.dto';
import { UpdateAddressClinicDto } from './dto/update-address-clinic.dto';

@Controller('address-clinic')
export class AddressClinicController {
  constructor(private readonly addressClinicService: AddressClinicService) {}

  @Post()
  create(@Body() createAddressClinicDto: CreateAddressClinicDto) {
    return this.addressClinicService.create(createAddressClinicDto);
  }

  @Get()
  findAll() {
    return this.addressClinicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressClinicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressClinicDto: UpdateAddressClinicDto) {
    return this.addressClinicService.update(+id, updateAddressClinicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressClinicService.remove(+id);
  }
}
