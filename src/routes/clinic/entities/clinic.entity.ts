import { EntityBase } from 'src/entities/entity-base.entity';
import { AddressClinic } from 'src/routes/address-clinic/entities/address-clinic.entity';
import { Column, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { ClinicWorker } from 'src/routes/clinic_worker/entities/clinic_worker.entity';
import { ClinicVet } from 'src/routes/clinic_vet/entities/clinic_vet.entity';

// @Entity('Clinic')
export class Clinic extends EntityBase {
  @Column({ name: 'CNPJ', unique: true, nullable: true, length: 33 })
  CNPJ: string;

  @Column({ name: 'Name', length: 100, nullable: true })
  Name: string;

  @OneToOne(() => AddressClinic, (AddressClinic) => AddressClinic.Clinic)
  @JoinColumn({ name: 'Address_Id' })
  AddressClinic: AddressClinic;

  @OneToMany(() => ClinicVet, (ClinicVet) => ClinicVet.Clinic)
  ClinicVet: ClinicVet[];

  @OneToMany(() => ClinicWorker, (ClinicWorker) => ClinicWorker.Clinic)
  ClinicWorker: ClinicWorker;
}
