import { EntityBase } from 'src/entities/entity-base.entity';
import { Clinic } from 'src/Routes/clinic/entities/clinic.entity';
import { Pet } from 'src/Routes/pet/entities/pet.entity';
import { User } from 'src/Routes/user/entities/user.entity';
import { Vet } from 'src/Routes/vet/entities/vet.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

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
