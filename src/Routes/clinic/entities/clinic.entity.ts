import { EntityBase } from 'src/entities/entity-base.entity';
import { AddressClinic } from 'src/Routes/address-clinic/entities/address-clinic.entity';
import { Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { ClinicWorker } from 'src/Routes/clinic_worker/entities/clinic_worker.entity';
import { ClinicVet } from 'src/Routes/clinic_vet/entities/clinic_vet.entity';
import { ClinicalAppointment } from 'src/Routes/clinical-appointment/entities/clinical-appointment.entity';

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

  @ManyToOne(
    () => ClinicalAppointment,
    (ClinicalAppointment) => ClinicalAppointment.Clinic,
  )
  ClinicalAppointment: ClinicalAppointment;
}
