import { Clinic } from 'src/Routes/clinic/entities/clinic.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { User } from '../../user/entities/user.entity';

@Entity('Clinic_Worker')
export class ClinicWorker extends EntityBase {
  @ManyToOne(() => Clinic, (Clinic) => Clinic.ClinicWorker)
  @JoinColumn({ name: 'Clinic_Id' })
  Clinic: Clinic;

  @OneToOne(() => User, (User) => User.ClinicWorker)
  @JoinColumn({ name: 'User_Id' })
  User: User;

  @Column({ name: 'Admission_Date' })
  Admission_Date: Date;

  @Column({ name: 'Status_Worker' })
  Status_Worker: string;
}
