import { Column, Entity, OneToOne } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { User } from '../../user/entities/user.entity';
import { Clinic } from '../../clinic/entities/clinic.entity';

@Entity('Address')
export class Address extends EntityBase {
  @Column({ name: 'Street' })
  Street: string;

  @Column({ name: 'CodePost' })
  CodePost: string;

  @Column({ name: 'Number' })
  Number: string;

  @Column({ name: 'Complement' })
  Complement: string;

  @Column({ name: 'City' })
  City: string;

  @Column({ name: 'State' })
  State: string;

  @Column({ name: 'Country' })
  Country: string;

  @OneToOne(() => User, (User) => User.Address)
  User: User;

  @OneToOne(() => Clinic, (Clinic) => Clinic.Address)
  Clinic: Clinic;

  constructor(
    Street?: string,
    CodePost?: string,
    Number?: string,
    Complement?: string,
    City?: string,
    State?: string,
    Country?: string,
    User?: User,
    Clinic?: Clinic,
  ) {
    super();
  }
}
