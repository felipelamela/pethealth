import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddressClinic1718583895547
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE AddressClinic (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Street VARCHAR(255) NOT NULL,
        CodePost VARCHAR(255) NOT NULL,
        Number VARCHAR(255) NOT NULL,
        Complement VARCHAR(255) NOT NULL,
        City VARCHAR(255) NOT NULL,
        State VARCHAR(255) NOT NULL,
        Country VARCHAR(255) NOT NULL,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    await queryRunner.query(`
      ALTER TABLE Clinic
      ADD COLUMN Address_Id INT UNIQUE,
      ADD CONSTRAINT FK_Clinic_AddressClinic FOREIGN KEY (Address_Id) REFERENCES AddressClinic(Id)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE Clinic DROP FOREIGN KEY FK_Clinic_AddressClinic`,
    );
    await queryRunner.query(`DROP TABLE AddressClinic`);
  }
}
