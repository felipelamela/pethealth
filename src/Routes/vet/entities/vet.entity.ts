import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { User } from '../../user/entities/user.entity';
import { ClinicalAppointment } from '../../clinic/entities/clinical-appointment.entity';
import { ClinicVet } from '../../clinic/entities/clinic_vet.entity';

@Entity('Vet')
export class Vet extends EntityBase {
  @Column({ name: 'CRMV', length: 20, unique: true, nullable: true })
  CRMV: string;

  @OneToOne(() => User, (User) => User.Vet)
  @JoinColumn({ name: 'User_Id' })
  User: User;

  @OneToMany(() => ClinicVet, (ClinicVet) => ClinicVet.Vet)
  ClinicVet: ClinicVet[];

  @ManyToOne(
    () => ClinicalAppointment,
    (ClinicalAppointment) => ClinicalAppointment.Vet,
  )
  ClinicalAppointment: ClinicalAppointment;

  constructor(
    CRMV?: string,
    User?: User,
    ClinicVet?: ClinicVet[],
    ClinicalAppointment?: ClinicalAppointment,
  ) {
    super();
  }
}
