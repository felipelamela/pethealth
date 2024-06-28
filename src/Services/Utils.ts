import { IUpdateValues } from './dtos/utils.dto';

class Utils {
  updateValues(update: IUpdateValues) {
    Object.keys(update.updates).forEach((key) => {
      if (update.dbValue.hasOwnProperty(key)) {
        update.dbValue[key] = update.updates[key];
      }
    });
  }
}

export default new Utils();
