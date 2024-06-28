import { User } from '../Routes/user/entities/user.entity';

interface IUserFilterLogin {
  User: User;
  AccessKey: string;
}

class UserFilter {
  userFilterLogin(data: IUserFilterLogin) {
    return {
      Login: data.User.Email,
      AccessKey: data.AccessKey,
    };
  }
}

export default new UserFilter();
