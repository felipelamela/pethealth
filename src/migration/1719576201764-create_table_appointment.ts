import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAppointment1719576201764 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE Clinical_Appointment (
            Id INT AUTO_INCREMENT PRIMARY KEY,
            Title NVARCHAR(120),
            Description TEXT,
            Clinic_Id INT,
            User_Id INT,
            Pet_Id INT,
            Vet_Id INT,
            Admission_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            Status_Worker VARCHAR(50) NULL,
            Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            CONSTRAINT FK_Appointment_Clinic FOREIGN KEY (Clinic_Id) REFERENCES Clinic(Id),
            CONSTRAINT FK_Appointment_Pet FOREIGN KEY (Pet_Id) REFERENCES Pet(Id),
            CONSTRAINT FK_Appointment_Vet FOREIGN KEY (Vet_Id) REFERENCES Vet(Id),
            CONSTRAINT FK_Appointment_User FOREIGN KEY (User_Id) REFERENCES User(Id)
        )
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE Clinical_Appointment`);
  }
}
