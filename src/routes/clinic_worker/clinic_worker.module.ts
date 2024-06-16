import { Module } from '@nestjs/common';
import { ClinicWorkerService } from './clinic_worker.service';
import { ClinicWorkerController } from './clinic_worker.controller';

@Module({
  controllers: [ClinicWorkerController],
  providers: [ClinicWorkerService],
  exports: [ClinicWorkerService],
})
export class ClinicWorkerModule {}
