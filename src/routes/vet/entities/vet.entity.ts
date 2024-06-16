import { User } from 'src/routes/user/entities/user.entity';
import { Column } from 'typeorm';

// @Entity('Vet')
export class Vet extends User {
  @Column({ name: 'CRMV', length: 20, unique: true, nullable: true })
  CRMV: string;
}
