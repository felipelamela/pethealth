import { Clinic } from 'src/Routes/clinic/entities/clinic.entity';
import { User } from 'src/Routes/user/entities/user.entity';
import { ManyToOne } from 'typeorm';

export class ClinicWorker extends User {
  @ManyToOne(() => Clinic, (Clinic) => Clinic.ClinicWorker)
  Clinic: Clinic;
}
