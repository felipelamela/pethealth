import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { User } from '../../user/entities/user.entity';
import { ClinicalAppointment } from '../../clinical-appointment/entities/clinical-appointment.entity';

@Entity('Pet')
export class Pet extends EntityBase {
  @Column({ name: 'Name', length: 30, nullable: true })
  Name: string;

  @Column({ name: 'Birth', nullable: true })
  Birth: Date;

  @Column({ name: 'Breed', nullable: true })
  Breed: string;

  @ManyToOne(() => User, (User) => User.Pet)
  User: User;

  @ManyToOne(
    () => ClinicalAppointment,
    (ClinicalAppointment) => ClinicalAppointment.Pet,
  )
  ClinicalAppointment: ClinicalAppointment;

  constructor(
    Name?: string,
    Birth?: Date,
    Breed?: string,
    User?: User,
    ClinicalAppointment?: ClinicalAppointment,
  ) {
    super();
  }
}
