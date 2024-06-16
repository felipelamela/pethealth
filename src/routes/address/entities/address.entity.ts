import { EntityBase } from 'src/entities/entity-base.entity';
import { User } from 'src/routes/user/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

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
}
