import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { AddressService } from '../address/address.service';
import { Address } from '../address/entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Address]),
  ],
  controllers: [UserController],
  providers: [UserService, AddressService],
})
export class UserModule {}
