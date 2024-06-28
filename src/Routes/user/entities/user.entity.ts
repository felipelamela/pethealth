import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { Address } from '../../address/entities/address.entity';
import { Role } from '../../../roles/entities/role.entity';
import { Clinic } from '../../clinic/entities/clinic.entity';
import { Vet } from '../../vet/entities/vet.entity';
import { Pet } from '../../pet/entities/pet.entity';

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
  @JoinColumn({ name: 'Address_Id' })
  Address: Address;

  @OneToOne(() => Role, (Role) => Role.User)
  @JoinColumn({ name: 'Role_Id' })
  Role: Role;

  @OneToOne(() => Clinic, (Clinic) => Clinic.Adm_User)
  Clinic: Clinic;

  @OneToOne(() => Vet, (Vet) => Vet.User)
  Vet: Vet;

  @OneToMany(() => Pet, (Pet) => Pet.User)
  Pet: Pet[];

  // @ManyToOne(
  //   () => ClinicalAppointment,
  //   (ClinicalAppointment) => ClinicalAppointment.User,
  // )
  // ClinicalAppointment: ClinicalAppointment;

  constructor(user?: Partial<User>) {
    super();
    this.Name = user?.Name;
    this.Document = user?.Document;
    this.Email = user?.Email;
    this.Password = user?.Password;
    this.Address = user?.Address;
    this.Role = user?.Role;
    this.Clinic = user?.Clinic;
    this.Vet = user?.Vet;
  }
}
