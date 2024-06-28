import { Column, Entity, OneToOne } from 'typeorm';
import { EntityBase } from '../../entities/entity-base.entity';
import { User } from '../../Routes/user/entities/user.entity';

@Entity('Role')
export class Role extends EntityBase {
  @Column({ name: 'Name', length: 10, nullable: false })
  Name: string;

  @OneToOne(() => User, (User) => User.Role)
  User: User;
}
