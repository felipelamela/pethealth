import { Address } from 'src/Routes/address/entities/address.entity';
import { Role } from '../../../roles/entities/role.entity';

export class CreateUserDto {
  Name: string;
  Document: string;
  Email: string;
  Role: Role;
  Password: string;
  Address: Address;
}
