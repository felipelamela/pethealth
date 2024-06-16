import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './routes/user/user.module';
import { VetModule } from './routes/vet/vet.module';
import { PetModule } from './routes/pet/pet.module';
import { AuthModule } from './auth/auth.module';
import { ClinicModule } from './routes/clinic/clinic.module';
import { AddressClinicModule } from './routes/address-clinic/address-clinic.module';
import { ClinicVetModule } from './routes/clinic_vet/clinic_vet.module';
import { ClinicWorkerModule } from './routes/clinic_worker/clinic_worker.module';
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
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
      // synchronize: true,
    }),
    UserModule,
    VetModule,
    PetModule,
    AuthModule,
    ClinicModule,
    AddressClinicModule,
    ClinicVetModule,
    ClinicWorkerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
