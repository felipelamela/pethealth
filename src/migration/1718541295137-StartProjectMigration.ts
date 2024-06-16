import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialTables1718506565403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`User\` (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(80) NOT NULL,
        Document VARCHAR(20) NOT NULL UNIQUE,
        Email VARCHAR(180) NOT NULL UNIQUE,
        Password VARCHAR(255) NOT NULL,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await queryRunner.query(`
      CREATE TABLE \`Address\` (
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
      CREATE TABLE \`Pet\` (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(30) NULL,
        Birth DATE NULL,
        Breed VARCHAR(255) NULL,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        User_Id INT,
        CONSTRAINT FK_User_Pet FOREIGN KEY (User_Id) REFERENCES \`User\`(Id) ON DELETE SET NULL
      )
    `);

    await queryRunner.query(`
      ALTER TABLE \`User\`
      ADD COLUMN Address_Id INT UNIQUE,
      ADD CONSTRAINT FK_User_Address FOREIGN KEY (Address_Id) REFERENCES \`Address\`(Id)
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`Pet\` DROP FOREIGN KEY \`FK_User_Pet\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_User_Address\``,
    );
    await queryRunner.query(`DROP TABLE \`Pet\``);
    await queryRunner.query(`DROP TABLE \`Address\``);
    await queryRunner.query(`DROP TABLE \`User\``);
  }
}
