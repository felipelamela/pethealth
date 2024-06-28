import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { AddressService } from '../address/address.service';
import { UpdateAddressDto } from '../address/dto/update-address.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import Utils from '../../Services/Utils';
import { IStatusCodeSuccess } from '../../Services/dtos/statusCode.dto';
import StatusCode from '../../Services/StatusCode';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { PetService } from '../pet/pet.service';
import { UpdatePetDto } from '../pet/dto/update-pet.dto';
import { Pet } from '../pet/entities/pet.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Pet)
    private readonly addressService: AddressService,
    private readonly petService: PetService,
  ) {}

  async updatePet(id: number, pet: UpdatePetDto): Promise<IStatusCodeSuccess> {
    try {
      const findPet = await this.petService.findOne(id);

      if (!findPet) {
        throw StatusCode.Error({
          message: 'Not Found',
          data: null,
          status: false,
          code: 404,
          httpStatus: HttpStatus.NOT_FOUND,
        });
      }

      Utils.updateValues({
        updates: pet,
        dbValue: findPet,
      });

      const returnPet = await this.petService.updateForUser(findPet);

      return StatusCode.Success({
        data: returnPet,
        status: true,
        code: 200,
        message: 'Update Pet user success',
      });
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        data: error,
        status: false,
        code: 500,
      });
    }
  }

  async createPet(pet: CreatePetDto): Promise<IStatusCodeSuccess> {
    try {
      const newPet = await this.petService.create(pet);
      return StatusCode.Success({
        data: newPet,
        status: true,
        code: 201,
        message: 'Pet Created',
      });
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        data: error.message,
        status: false,
        code: 500,
      });
    }
  }

  async removePet(id: number) {
    try {
      const returnDelete = this.petService.remove(id);
      return StatusCode.Success({
        data: returnDelete,
        status: true,
        code: 200,
        message: 'Delete Pet success',
      });
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        data: error,
        status: false,
        code: 500,
      });
    }
  }

  async findAllPetsUser(id: number) {
    try {
      const petsUser = await this.userRepository.findOne({
        where: { Id: id },
        relations: ['Pet'],
      });

      if (!petsUser) throw StatusCode.NotFound();

      return StatusCode.Success({
        data: petsUser,
        status: true,
        code: 200,
        message: 'Find All Pet success',
      });
    } catch (error) {}
  }

  async create(createUserDto: CreateUserDto): Promise<IStatusCodeSuccess> {
    try {
      const returnUser = await this.userRepository.save(createUserDto);
      return StatusCode.Success({
        data: returnUser,
        status: true,
        code: 201,
        message: 'User Created',
      });
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        data: error,
        status: false,
        code: 500,
      });
    }
  }

  async findAll(): Promise<IStatusCodeSuccess> {
    const users = await this.userRepository.find();
    return StatusCode.Success({
      data: users,
      status: true,
      code: 201,
      message: 'Find All User',
    });
  }

  async findOne(id: number): Promise<IStatusCodeSuccess> {
    const user = await this.userRepository.findOne({
      where: { Id: id },
      relations: ['Role'],
    });

    if (!user) {
      throw StatusCode.Error({
        message: 'Not Found',
        data: null,
        status: false,
        code: 404,
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }
    return StatusCode.Success({
      data: user,
      status: true,
      code: 201,
      message: 'Find User',
    });
  }

  async findUserWithRoles(id: number): Promise<IStatusCodeSuccess> {
    const user = await this.userRepository.findOne({
      where: { Id: id },
      relations: ['Role'],
    });

    if (!user) {
      throw StatusCode.Error({
        message: 'Not Found',
        data: null,
        status: false,
        code: 404,
        httpStatus: HttpStatus.NOT_FOUND,
      });
    }
    return StatusCode.Success({
      data: user,
      status: true,
      code: 201,
      message: 'Find User',
    });
  }

  async updateAddressUser(
    id: number,
    update: UpdateAddressDto,
  ): Promise<IStatusCodeSuccess> {
    try {
      const returnUser = await this.userRepository.findOne({
        where: { Id: id },
        relations: ['Address'],
      });
      if (!returnUser) {
        throw StatusCode.Error({
          message: 'Not Found',
          data: null,
          status: false,
          code: 404,
          httpStatus: HttpStatus.NOT_FOUND,
        });
      }

      const { Address } = returnUser;
      Utils.updateValues({
        updates: update,
        dbValue: Address,
      });
      const returnAddress = await this.addressService.updateForUser(Address);
      return StatusCode.Success({
        data: returnAddress,
        status: true,
        code: 200,
        message: 'Update Address user success',
      });
    } catch (error) {
      throw StatusCode.Error({
        message: 'Error',
        data: error,
        status: false,
        code: 500,
      });
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} ${updateUserDto} user`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
