import { ClinicVet } from 'src/Routes/clinic_vet/entities/clinic_vet.entity';
import { ClinicalAppointment } from 'src/Routes/clinical-appointment/entities/clinical-appointment.entity';
import { User } from 'src/Routes/user/entities/user.entity';
import { Column, ManyToOne, OneToMany } from 'typeorm';

// @Entity('Vet')
export class Vet extends User {
  @Column({ name: 'CRMV', length: 20, unique: true, nullable: true })
  CRMV: string;

  @OneToMany(() => ClinicVet, (ClinicVet) => ClinicVet.Vet)
  ClinicVet: ClinicVet[];

  @ManyToOne(
    () => ClinicalAppointment,
    (ClinicalAppointment) => ClinicalAppointment.Vet,
  )
  ClinicalAppointment: ClinicalAppointment;
}
