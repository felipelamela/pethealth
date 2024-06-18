import { EntityBase } from 'src/entities/entity-base.entity';
import { ClinicalAppointment } from 'src/Routes/clinical-appointment/entities/clinical-appointment.entity';
import { User } from 'src/Routes/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

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
}
