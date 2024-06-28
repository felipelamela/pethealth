import { Address } from './../address/entities/address.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Vet } from '../vet/entities/vet.entity';
import { Clinic } from './entities/clinic.entity';
import { Pet } from '../pet/entities/pet.entity';
import { Repository } from 'typeorm';
import FindUserDto from './dto/find-user.dto';
import StatusCode from '../../Services/StatusCode';
import { IStatusCodeSuccess } from '../../Services/dtos/statusCode.dto';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { ClinicVet } from './entities/clinic_vet.entity';

@Injectable()
export class ClinicService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Vet)
    private readonly vetRepository: Repository<Vet>,

    @InjectRepository(Clinic)
    private readonly clinicRepository: Repository<Clinic>,

    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,

    @InjectRepository(ClinicVet)
    private readonly clinicVetRepository: Repository<ClinicVet>,
  ) {}

  async createUser(create: CreateUserDto) {
    try {
      const { Address } = create;
      const address = await this.addressRepository.save(Address);
      create.Address = address;
      const user = await this.userRepository.save(create);
      return StatusCode.Success({
        message: 'User created',
        code: 200,
        status: true,
        data: user,
      });
    } catch (error) {
      throw StatusCode.Error({
        status: false,
        code: 500,
        message: 'Error',
        data: error.message,
      });
    }
  }
  async createPetUser(pet: CreatePetDto) {
    try {
      const newPet = this.petRepository.save(pet);
      return StatusCode.Success({
        message: 'User created',
        code: 200,
        status: true,
        data: newPet,
      });
    } catch (error) {
      throw StatusCode.Error({
        status: false,
        code: 500,
        message: 'Error',
        data: error.message,
      });
    }
  }
  async findUser(user: FindUserDto): Promise<IStatusCodeSuccess> {
    try {
      const { cpf } = user;
      const userFind = await this.userRepository.findOne({
        where: { Document: cpf },
        relations: ['Pet'],
      });

      if (!userFind) {
        throw StatusCode.NotFound();
      }

      return StatusCode.Success({
        message: 'User Find',
        code: 200,
        status: true,
        data: userFind,
      });
    } catch (error) {
      throw StatusCode.Error({
        message: `Error`,
        code: 500,
        status: false,
        data: error.message,
      });
    }
  }
  async findVetOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
  async createVetOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
  async addVetOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
  async removeVetOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
  async findWorkerOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
  async createWorkerOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
  async addWorkerOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
  async removeworkerOnSystem() {
    try {
      throw StatusCode.NotImplemented();
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        status: false,
        code: 500,
        data: error.message,
      });
    }
  }
}
