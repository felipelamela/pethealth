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
import { Address } from '../../address/entities/address.entity';
import { ClinicalAppointment } from './clinical-appointment.entity';
import { ClinicVet } from './clinic_vet.entity';
import { ClinicWorker } from './clinic_worker.entity';

@Entity('Clinic')
export class Clinic extends EntityBase {
  @Column({ name: 'CNPJ', unique: true, nullable: true, length: 33 })
  CNPJ: string;

  @Column({ name: 'Name', length: 100, nullable: true })
  Name: string;

  @OneToMany(() => ClinicVet, (ClinicVet) => ClinicVet.Clinic)
  ClinicVet: ClinicVet[];

  @OneToOne(() => User, (User) => User.Clinic)
  @JoinColumn({ name: 'Adm_User' })
  Adm_User: User;

  @OneToOne(() => Address, (Address) => Address.Clinic)
  @JoinColumn({ name: 'Address_Id' })
  Address: Address;

  @OneToMany(() => ClinicWorker, (ClinicWorker) => ClinicWorker.Clinic)
  ClinicWorker: ClinicWorker;

  @ManyToOne(
    () => ClinicalAppointment,
    (ClinicalAppointment) => ClinicalAppointment.Clinic,
  )
  ClinicalAppointment: ClinicalAppointment;

  constructor(
    CNPJ?: string,
    Name?: string,
    ClinicVet?: ClinicVet[],
    Adm_User?: User,
    Address?: Address,
    ClinicalAppointment?: ClinicalAppointment,
  ) {
    super();
  }
}
