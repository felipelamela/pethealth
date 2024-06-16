import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableVet1718571464006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`Vet\` (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(80) NOT NULL,
        Document VARCHAR(20) NOT NULL UNIQUE,
        Email VARCHAR(180) NOT NULL UNIQUE,
        Password VARCHAR(255) NOT NULL,
        CRMV VARCHAR(20) NOT NULL UNIQUE,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`Vet\``);
  }
}
