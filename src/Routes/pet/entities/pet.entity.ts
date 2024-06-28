import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { User } from '../../user/entities/user.entity';

@Entity('Pet')
export class Pet extends EntityBase {
  @Column({ name: 'Name', length: 30, nullable: true })
  Name: string;

  @Column({ name: 'Birth', nullable: true })
  Birth: Date;

  @Column({ name: 'Breed', nullable: true })
  Breed: string;

  @ManyToOne(() => User, (User) => User.Pet)
  @JoinColumn({ name: 'User_Id' })
  User: User;

  // @ManyToOne(
  //   () => ClinicalAppointment,
  //   (ClinicalAppointment) => ClinicalAppointment.Pet,
  // )
  // ClinicalAppointment: ClinicalAppointment;

  constructor(pet?: Pet) {
    super();
    this.Name = pet?.Name;
    this.Birth = pet?.Birth;
    this.Breed = pet?.Breed;
    this.User = pet?.User;
  }
}
