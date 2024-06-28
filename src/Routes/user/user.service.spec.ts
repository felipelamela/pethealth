import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Address } from '../address/entities/address.entity';
import { AddressService } from '../address/address.service';
import {
  userFind,
  userMockCreate,
  userMockReturnFind,
} from './__mocks__/user.mock';
import { Pet } from '../pet/entities/pet.entity';
import { PetService } from '../pet/pet.service';

describe('UserService', () => {
  let userRepository: Repository<User>;
  let addressRepository: Repository<Address>;
  let petRepository: Repository<Pet>;
  let addressService: AddressService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        AddressService,
        PetService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOne: jest.fn().mockResolvedValue(userFind),
            create: jest.fn().mockResolvedValue(userMockCreate),
          },
        },

        {
          provide: getRepositoryToken(Address),
          useValue: {},
        },

        {
          provide: getRepositoryToken(Pet),
          useValue: {},
        },
      ],
    }).compile();

    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    petRepository = module.get<Repository<Pet>>(getRepositoryToken(Pet));
    addressRepository = module.get<Repository<Address>>(
      getRepositoryToken(Address),
    );
    userService = module.get<UserService>(UserService);
    addressService = module.get<AddressService>(AddressService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(addressService).toBeDefined();
    expect(addressRepository).toBeDefined();
    expect(petRepository).toBeDefined();
  });

  it('should return user in findOne', async () => {
    const user = await userService.findOne(userFind.Id);
    expect(user).toEqual(userMockReturnFind);
  });
});
