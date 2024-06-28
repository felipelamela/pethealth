export const userMockCreate = {
  Name: 'Felipe Lamela',
  Document: '4083749348',
  Email: 'dev.fd@gmail.com',
  Password: '@felipe123',
  Role: 1,
  Address: {
    Street: 'Rua Angela da Costa',
    CodePost: '83309209',
    Number: '20',
    Complement: 'asdasd',
    City: 'Piraquara',
    State: 'Paraná',
    Country: 'Brasil',
  },
};

export const userMockReturnFind = {
  code: 201,
  status: true,
  message: 'Find User',
  data: {
    Name: 'Felipe Lamela',
    Document: '4083749848',
    Email: 'dev.f@gmail.com',
    Password: '@felipe123',
    Role: {
      Id: 1,
      Create_At: '2024-06-23T21:46:07.000Z',
      Update_At: '2024-06-23T21:46:07.000Z',
      Name: 'Tutor',
    },
    Id: 1,
    Create_At: '2024-06-23T21:47:03.000Z',
    Update_At: '2024-06-23T21:47:03.000Z',
  },
};

export const userFind = {
  Name: 'Felipe Lamela',
  Document: '4083749848',
  Email: 'dev.f@gmail.com',
  Password: '@felipe123',
  Role: {
    Id: 1,
    Create_At: '2024-06-23T21:46:07.000Z',
    Update_At: '2024-06-23T21:46:07.000Z',
    Name: 'Tutor',
  },
  Id: 1,
  Create_At: '2024-06-23T21:47:03.000Z',
  Update_At: '2024-06-23T21:47:03.000Z',
};
