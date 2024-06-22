import { EntityBase } from 'src/entities/entity-base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ClinicVet } from 'src/Routes/clinic_vet/entities/clinic_vet.entity';
import { ClinicalAppointment } from 'src/Routes/clinical-appointment/entities/clinical-appointment.entity';
import { User } from 'src/Routes/user/entities/user.entity';
import { Address } from 'src/Routes/address/entities/address.entity';

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

  // @OneToMany(() => ClinicWorker, (ClinicWorker) => ClinicWorker.Clinic)
  // ClinicWorker: ClinicWorker;

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
