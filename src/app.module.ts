import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './routes/user/user.module';
import { VetModule } from './routes/vet/vet.module';
import { PetModule } from './routes/pet/pet.module';
import { AddressModule } from './routes/address/address.module';
import { AuthModule } from './auth/auth.module';
import { ClinicModule } from './routes/clinic/clinic.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    UserModule,
    VetModule,
    PetModule,
    AddressModule,
    AuthModule,
    ClinicModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
