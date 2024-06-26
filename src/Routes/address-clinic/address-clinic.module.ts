import { Module } from '@nestjs/common';
import { AddressClinicService } from './address-clinic.service';
import { AddressClinicController } from './address-clinic.controller';

@Module({
  controllers: [AddressClinicController],
  providers: [AddressClinicService],
  exports: [AddressClinicService],
})
export class AddressClinicModule {}
