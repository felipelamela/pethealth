import { Clinic } from 'src/Routes/clinic/entities/clinic.entity';
import { Column, OneToOne } from 'typeorm';

// @Entity({ name: 'Address_Clinic' })
export class AddressClinic {
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

  @OneToOne(() => Clinic, (Clinic) => Clinic.AddressClinic)
  Clinic: Clinic;
}
