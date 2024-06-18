import { EntityBase } from 'src/entities/entity-base.entity';
import { Address } from 'src/Routes/address/entities/address.entity';
import { ClinicalAppointment } from 'src/Routes/clinical-appointment/entities/clinical-appointment.entity';
import { Pet } from 'src/Routes/pet/entities/pet.entity';
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

  @OneToMany(() => Pet, (Pet) => Pet.User)
  Pet: Pet[];

  @ManyToOne(
    () => ClinicalAppointment,
    (ClinicalAppointment) => ClinicalAppointment.User,
  )
  ClinicalAppointment: ClinicalAppointment;
}
