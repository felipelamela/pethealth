import { Module } from '@nestjs/common';
import { ClinicVetService } from './clinic_vet.service';
import { ClinicVetController } from './clinic_vet.controller';

@Module({
  controllers: [ClinicVetController],
  providers: [ClinicVetService],
})
export class ClinicVetModule {}
