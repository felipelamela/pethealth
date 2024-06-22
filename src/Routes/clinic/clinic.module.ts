import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { ClinicWorkerModule } from '../clinic_worker/clinic_worker.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../address/entities/address.entity';
import { AddressService } from '../address/address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address]), ClinicWorkerModule],
  controllers: [ClinicController],
  providers: [ClinicService, AddressService],
})
export class ClinicModule {}
