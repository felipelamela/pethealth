import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../address/entities/address.entity';
import { AddressService } from '../address/address.service';
import { User } from '../user/entities/user.entity';
import { Pet } from '../pet/entities/pet.entity';
import { Vet } from '../vet/entities/vet.entity';
import { Clinic } from './entities/clinic.entity';
import { ClinicVet } from './entities/clinic_vet.entity';
import { ClinicWorker } from './entities/clinic_worker.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Pet]),
    TypeOrmModule.forFeature([Vet]),
    TypeOrmModule.forFeature([Clinic]),
    TypeOrmModule.forFeature([ClinicVet]),
    TypeOrmModule.forFeature([ClinicWorker]),
    ClinicModule,
  ],
  controllers: [ClinicController],
  providers: [ClinicService, AddressService],
})
export class ClinicModule {}
