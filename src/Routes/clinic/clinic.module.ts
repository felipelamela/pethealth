import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { AddressClinicModule } from '../address-clinic/address-clinic.module';
import { ClinicWorkerModule } from '../clinic_worker/clinic_worker.module';

@Module({
  imports: [AddressClinicModule, ClinicWorkerModule],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
