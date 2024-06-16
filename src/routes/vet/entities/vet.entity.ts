import { ClinicVet } from 'src/routes/clinic_vet/entities/clinic_vet.entity';
import { User } from 'src/routes/user/entities/user.entity';
import { Column, OneToMany } from 'typeorm';

// @Entity('Vet')
export class Vet extends User {
  @Column({ name: 'CRMV', length: 20, unique: true, nullable: true })
  CRMV: string;

  @OneToMany(() => ClinicVet, (ClinicVet) => ClinicVet.Vet)
  ClinicVet: ClinicVet[];
}
