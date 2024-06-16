import { EntityBase } from 'src/entities/entity-base.entity';
import { Address } from 'src/routes/address/entities/address.entity';
import { Pet } from 'src/routes/pet/entities/pet.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity('User')
export class User extends EntityBase {
  @Column({ name: 'Name', nullable: false, length: 80 })
  Name: string;

  @Column({ name: 'Document', nullable: false, unique: true, length: 20 })
  Document: string;

  @Column({ name: 'Email', nullable: false, unique: true, length: 180 })
  Email: string;

  @Column({ name: 'Password', nullable: false })
  Password: string;

  @OneToOne(() => Address, (Address) => Address.User)
  Address: Address;

  @OneToMany(() => Pet, (Pet) => Pet.User)
  Pet: Pet[];
}
