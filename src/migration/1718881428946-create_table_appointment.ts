// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class CreateTableAppointment1718881428946 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`
//         CREATE TABLE Clinical_Appointment(
//         Id INT AUTO_INCREMENT PRIMARY KEY,
//         Title NVARCHAR(120),
//         Description TEXT,
//         Clinic_Id INT,
//         Vet_Id INT,
//         Pet_Id INT,
//         User_Id INT,
//         Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//         )
//     `);
//   }

//   //      CONSTRAINT Uk_Clinic_Vet UNIQUE(Clinic_Id, Vet_Id)

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE Cli`);
//   }
// }
