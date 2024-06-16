import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AddressModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
