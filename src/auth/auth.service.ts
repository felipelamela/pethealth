import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../Routes/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { AddressService } from '../Routes/address/address.service';
import { RolesService } from '../roles/roles.service';
import StatusCode from '../Services/StatusCode';
import ILoginDto from './dto/login-auth.dto';
import { IStatusCodeSuccess } from '../Services/dtos/statusCode.dto';
import UserFilter from '../FilterData/UserFilter';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../Routes/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly addressService: AddressService,
    private readonly rolesService: RolesService,
    private jwtService: JwtService,
  ) {}

  async createUser(user: CreateUserDto) {
    try {
      const { Address, Role } = user;
      const returnRole = await this.rolesService.findOne(Role.Id);
      user.Role = returnRole;
      const returnAddress = await this.addressService.create(Address);
      user.Address = returnAddress;
      const hash = await bcrypt.hash(user.Password, 10);
      user.Password = hash;

      const returnUser = await this.userRepository.save(user);

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

  async loginUser(user: ILoginDto): Promise<IStatusCodeSuccess> {
    const { Login, Password } = user;
    const userFind = await this.userRepository.findOne({
      where: { Email: Login },
      relations: ['Role'],
    });
    if (!userFind) throw StatusCode.NotFound();

    const isMatch = await bcrypt.compare(Password, userFind.Password);
    if (!isMatch) throw StatusCode.PasswordFail();

    const payload = { role: userFind.Role, username: userFind.Email };
    const access_token = await this.jwtService.signAsync(payload);
    return StatusCode.Success({
      data: UserFilter.userFilterLogin({
        AccessKey: access_token,
        User: userFind,
      }),
      status: true,
      code: 200,
      message: 'Success',
    });
  }
}
