import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { AddressService } from '../address/address.service';
import { UpdateAddressDto } from '../address/dto/update-address.dto';
import { Address } from '../address/entities/address.entity';
import { updateValues } from '../../utils/utils';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly addressService: AddressService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    try {
      const { Address } = createUserDto;
      const returnAddress = await this.addressService.create(Address);
      createUserDto.Address = returnAddress;
      const returnUser = await this.userRepository.save(createUserDto);
      return returnUser;
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { Id: id } });
  }

  async updateAddressUser(
    id: number,
    update: UpdateAddressDto,
  ): Promise<Address | undefined> {
    try {
      const returnUser = await this.userRepository.findOne({
        where: { Id: id },
        relations: ['Address'],
      });
      const { Address } = returnUser;
      updateValues(update, Address);
      const returnAddress = await this.addressService.updateForUser(Address);
      return returnAddress;
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} ${updateUserDto} user`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
