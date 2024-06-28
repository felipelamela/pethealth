import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { AddressService } from '../address/address.service';
import { Address } from '../address/entities/address.entity';
import { Pet } from '../pet/entities/pet.entity';
import { PetService } from '../pet/pet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Pet]),
    TypeOrmModule.forFeature([Address]),
  ],
  controllers: [UserController],
  providers: [UserService, AddressService, PetService],
  exports: [UserService],
})
export class UserModule {}
