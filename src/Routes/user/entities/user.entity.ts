import { EntityBase } from 'src/entities/entity-base.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Address } from 'src/Routes/address/entities/address.entity';
import { Clinic } from 'src/Routes/clinic/entities/clinic.entity';
import { ClinicalAppointment } from 'src/Routes/clinical-appointment/entities/clinical-appointment.entity';
import { Pet } from 'src/Routes/pet/entities/pet.entity';
import { Vet } from 'src/Routes/vet/entities/vet.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('User')
export class User extends EntityBase {
  @Column({ name: 'Name', nullable: false, length: 80 })
  Name: string;

  @Column({ name: 'Document', nullable: false, unique: true, length: 20 })
  Document: string;

  @Column({ name: 'Email', nullable: false, unique: true, length: 180 })
  Email: string;

  @Column({ name: 'Password', nullable: false })
  Password: string;

  @OneToOne(() => Address, (Address) => Address.User)
  @JoinColumn({ name: 'Address_Id' })
  Address: Address;

  @OneToOne(() => Role, (Role) => Role.User)
  @JoinColumn({ name: 'Role_Id' })
  Role: Role;

  @OneToOne(() => Clinic, (Clinic) => Clinic.Adm_User)
  Clinic: Clinic;

  @OneToOne(() => Vet, (Vet) => Vet.User)
  Vet: Vet;

  @OneToMany(() => Pet, (Pet) => Pet.User)
  Pet: Pet[];

  @ManyToOne(
    () => ClinicalAppointment,
    (ClinicalAppointment) => ClinicalAppointment.User,
  )
  ClinicalAppointment: ClinicalAppointment;

  constructor(
    Name?: string,
    Document?: string,
    Email?: string,
    Password?: string,
    Address?: Address,
    Role?: Role,
    Clinic?: Clinic,
    Vet?: Vet,
  ) {
    super();
  }
}
