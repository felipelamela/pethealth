import { HttpStatus } from '@nestjs/common';

export interface IStatusCodeError {
  code: number;
  data: any;
  status: boolean;
  message: string;
  httpStatus?: HttpStatus;
}

export interface IStatusCodeSuccess {
  data: any;
  message: string;
  status: boolean;
  code: number;
}
