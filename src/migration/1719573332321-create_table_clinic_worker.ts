import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableClinicWorker1719573332321
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE Clinic_Worker (
            Id INT AUTO_INCREMENT PRIMARY KEY,
            Clinic_Id INT,
            User_Id INT,
            Admission_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            Status_Worker VARCHAR(50) NULL,
            Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            CONSTRAINT Uk_Worker_Clinic UNIQUE (Clinic_Id, User_Id),
            CONSTRAINT FK_Worker_Clinic FOREIGN KEY (Clinic_Id) REFERENCES Clinic(Id),
            CONSTRAINT FK_Worker_User FOREIGN KEY (User_Id) REFERENCES User(Id)
        )
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE Clinic_Worker
            `);
  }
}
