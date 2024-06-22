import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialTables1718506565403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE User (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(80) NOT NULL,
        Document VARCHAR(20) NOT NULL UNIQUE,
        Email VARCHAR(180) NOT NULL UNIQUE,
        Password VARCHAR(255) NOT NULL,
        Address_Id INT UNIQUE,
        Role_Id INT, -- Mudado de CHAR(1) para INT
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await queryRunner.query(`
      CREATE TABLE Address (
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
      CREATE TABLE Vet (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        User_Id INT UNIQUE,
        CRMV VARCHAR(20) NOT NULL UNIQUE,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await queryRunner.query(`
      CREATE TABLE Pet (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(30) NULL,
        Birth DATE NULL,
        Breed VARCHAR(255) NULL,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        User_Id INT,
        CONSTRAINT FK_User_Pet FOREIGN KEY (User_Id) REFERENCES User(Id) ON DELETE SET NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE Role (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(10),
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await queryRunner.query(`
      CREATE TABLE Clinic (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(100) NOT NULL,
        Address_Id INT UNIQUE,
        Adm_User INT UNIQUE,
        CNPJ VARCHAR(33) NOT NULL UNIQUE,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    await queryRunner.query(`
        CREATE TABLE Clinic_Vet (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Clinic_Id INT,
        Vet_Id INT,
        Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        Updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT Uk_Clinic_Vet UNIQUE (Clinic_Id, Vet_Id)
        )
    `);

    // Relações
    await queryRunner.query(`
      ALTER TABLE Clinic_Vet
      ADD CONSTRAINT Fk_Clinic_Vet_Clinic_Id FOREIGN KEY (Clinic_Id) REFERENCES Clinic(Id)
    `);
    await queryRunner.query(`
      ALTER TABLE Clinic_Vet
      ADD CONSTRAINT Fk_Clinic_Vet_Vet_Id FOREIGN KEY (Vet_Id) REFERENCES Vet(Id)
    `);
    await queryRunner.query(`
      ALTER TABLE Vet
      ADD CONSTRAINT FK_Vet_User FOREIGN KEY (User_Id) REFERENCES User(Id)
    `);
    await queryRunner.query(`
      ALTER TABLE User
      ADD CONSTRAINT FK_User_Address FOREIGN KEY (Address_Id) REFERENCES Address(Id)
    `);
    await queryRunner.query(`
      ALTER TABLE User
      ADD CONSTRAINT FK_User_Role FOREIGN KEY (Role_Id) REFERENCES Role(Id)
    `);
    await queryRunner.query(`
      ALTER TABLE Clinic
      ADD CONSTRAINT FK_Clinic_Address FOREIGN KEY (Address_Id) REFERENCES Address(Id)
    `);
    await queryRunner.query(`
      ALTER TABLE Clinic
      ADD CONSTRAINT FK_Clinic_User FOREIGN KEY (Adm_User) REFERENCES User(Id)
    `);

    // Adicionando Valores nas Roles
    await queryRunner.query(`INSERT INTO Role (Name) VALUES ('Tutor');`);
    await queryRunner.query(`INSERT INTO Role (Name) VALUES ('Admin');`);
    await queryRunner.query(`INSERT INTO Role (Name) VALUES ('Vet');`);
    await queryRunner.query(`INSERT INTO Role (Name) VALUES ('Worker');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE Pet DROP FOREIGN KEY FK_User_Pet`);
    await queryRunner.query(`ALTER TABLE User DROP FOREIGN KEY FK_User_Role`);
    await queryRunner.query(
      `ALTER TABLE User DROP FOREIGN KEY FK_User_Address`,
    );
    await queryRunner.query(
      `ALTER TABLE Clinic DROP FOREIGN KEY FK_Clinic_Address`,
    );
    await queryRunner.query(
      `ALTER TABLE Clinic DROP FOREIGN KEY FK_Clinic_User`,
    );
    await queryRunner.query(`DROP TABLE Clinic_Vet`);
    await queryRunner.query(`DROP TABLE Clinic`);
    await queryRunner.query(`DROP TABLE Vet`);
    await queryRunner.query(`DROP TABLE Role`);
    await queryRunner.query(`DROP TABLE Pet`);
    await queryRunner.query(`DROP TABLE Address`);
    await queryRunner.query(`DROP TABLE User`);
  }
}
