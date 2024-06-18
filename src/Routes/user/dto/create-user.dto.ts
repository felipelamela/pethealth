import { Address } from 'src/Routes/address/entities/address.entity';

export class CreateUserDto {
  Name: string;
  Document: string;
  Email: string;
  Password: string;
  Address: Address;
}
