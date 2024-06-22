import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { Clinic } from '../../clinic/entities/clinic.entity';
import { Pet } from '../../pet/entities/pet.entity';
import { Vet } from '../../vet/entities/vet.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'Clinical_Appointment' })
export class ClinicalAppointment extends EntityBase {
  @Column({ name: 'Title', type: 'nvarchar' })
  Title: string;

  @Column({ name: 'Description', type: 'text' })
  Description: string;

  @OneToMany(() => Clinic, (Clinic) => Clinic.ClinicalAppointment)
  @JoinColumn({ name: 'Clinic_Id' })
  Clinic: Clinic[];

  @OneToMany(() => Pet, (Pet) => Pet.ClinicalAppointment)
  @JoinColumn({ name: 'Pet_Id' })
  Pet: Pet[];

  @OneToMany(() => Vet, (Vet) => Vet.ClinicalAppointment)
  @JoinColumn({ name: 'Vet_Id' })
  Vet: Vet[];

  @OneToMany(() => User, (User) => User.ClinicalAppointment)
  @JoinColumn({ name: 'User_Id' })
  User: User[];
}
