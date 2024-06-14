import { EntityBase } from 'src/entities/entity-base.entity';
import { Column, Entity } from 'typeorm';

Entity('User');
export class User extends EntityBase {
  @Column({ name: 'Name', nullable: false, length: 80 })
  Name: string;

  @Column({ name: 'Document', nullable: false, unique: true, length: 20 })
  Document: string;

  @Column({ name: 'Email', nullable: false, unique: true, length: 180 })
  Email: string;

  @Column({ name: 'Password', nullable: false })
  Password: string;
}
