import { User } from 'src/Routes/user/entities/user.entity';
import { EntityBase } from 'src/entities/entity-base.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Role')
export class Role extends EntityBase {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column({ name: 'Name', length: 10, nullable: false })
  Name: string;

  @OneToOne(() => User, (User) => User.Role)
  User: User;

  @Column({ name: 'Created_At' })
  Created_At: Date;

  @Column({ name: 'Updated_At' })
  Updated_At: Date;
}
