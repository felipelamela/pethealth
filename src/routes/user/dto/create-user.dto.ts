import { Address } from 'src/routes/address/entities/address.entity';

export class CreateUserDto {
  Name: string;
  Document: string;
  Email: string;
  Password: string;
  Address: Address;
}
