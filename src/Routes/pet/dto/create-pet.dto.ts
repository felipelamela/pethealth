import { User } from '../../user/entities/user.entity';

export class CreatePetDto {
  Name: string;
  Birth: Date;
  Breed: string;
  User: User;
}
