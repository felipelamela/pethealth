import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Routes/user/entities/user.entity';
import { Address } from '../Routes/address/entities/address.entity';
import { AddressService } from '../Routes/address/address.service';
import { Role } from '../roles/entities/role.entity';
import { RolesService } from '../roles/roles.service';
import { Pet } from '../Routes/pet/entities/pet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Pet]),
    TypeOrmModule.forFeature([Address]),
    TypeOrmModule.forFeature([Role]),
    JwtModule.register({
      global: true,
      secret: `${process.env.JWT_PASS}`,
      signOptions: { expiresIn: '300000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AddressService, RolesService],
})
export class AuthModule {}
