import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { Clinic } from './clinic.entity';
import { Vet } from '../../vet/entities/vet.entity';
import { Pet } from '../../pet/entities/pet.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'Clinical_Appointment' })
export class ClinicalAppointment extends EntityBase {
  @Column({ name: 'Title', type: 'nvarchar' })
  Title: string;

  @Column({ name: 'Description', type: 'text' })
  Description: string;

  @ManyToOne(() => Clinic, (Clinic) => Clinic.ClinicalAppointment)
  @JoinColumn({ name: 'Clinic_Id' })
  Clinic: Clinic[];

  @ManyToOne(() => Pet, (Pet) => Pet.ClinicalAppointment)
  @JoinColumn({ name: 'Pet_Id' })
  Pet: Pet[];

  @ManyToOne(() => Vet, (Vet) => Vet.ClinicalAppointment)
  @JoinColumn({ name: 'Vet_Id' })
  Vet: Vet[];

  @ManyToOne(() => User, (User) => User.ClinicalAppointment)
  @JoinColumn({ name: 'User_Id' })
  User: User[];
}
