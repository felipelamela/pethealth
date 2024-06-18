import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './Routes/user/user.module';
import { VetModule } from './Routes/vet/vet.module';
import { PetModule } from './Routes/pet/pet.module';
import { AuthModule } from './auth/auth.module';
import { ClinicModule } from './Routes/clinic/clinic.module';
import { ClinicVetModule } from './Routes/clinic_vet/clinic_vet.module';
import { ClinicalAppointmentModule } from './Routes/clinical-appointment/clinical-appointment.module';
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
    ClinicVetModule,
    ClinicalAppointmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
