import { Clinic } from 'src/routes/clinic/entities/clinic.entity';
import { User } from 'src/routes/user/entities/user.entity';
import { ManyToOne } from 'typeorm';

export class ClinicWorker extends User {
  @ManyToOne(() => Clinic, (Clinic) => Clinic.ClinicWorker)
  Clinic: Clinic;
}
