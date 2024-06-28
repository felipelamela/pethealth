import { HttpException, HttpStatus } from '@nestjs/common';
import { IStatusCodeError, IStatusCodeSuccess } from './dtos/statusCode.dto';

class StatusCode {
  Success(params?: IStatusCodeSuccess): IStatusCodeSuccess {
    return {
      code: params?.code || 200,
      status: params?.status || true,
      message: params?.message || 'Success',
      data: params?.data || 'Success',
    };
  }

  Error(params: IStatusCodeError): HttpException {
    return new HttpException(
      {
        code: params.code,
        data: params.data,
        status: params.status,
        message: params.message,
      },
      params.httpStatus || HttpStatus.BAD_REQUEST,
    );
  }

  NotFound(params?: IStatusCodeError): HttpException {
    return new HttpException(
      {
        code: params.code || 404,
        data: params.data || null,
        status: params.status || false,
        message: params.message || 'Not Found',
      },
      params.httpStatus || HttpStatus.NOT_FOUND,
    );
  }
  NotImplemented(params?: IStatusCodeError): HttpException {
    return new HttpException(
      {
        code: params.code || 501,
        data: params.data || null,
        status: params.status || false,
        message: params.message || 'Not Implemented',
      },
      params.httpStatus || HttpStatus.NOT_IMPLEMENTED,
    );
  }

  NotPermission(params?: IStatusCodeError): HttpException {
    return new HttpException(
      {
        code: params.code || 500,
        data: params.data || null,
        status: params.status || false,
        message: params.message || 'Not Permission',
      },
      params.httpStatus || HttpStatus.BAD_REQUEST,
    );
  }
  PasswordFail(params?: IStatusCodeError): HttpException {
    return new HttpException(
      {
        code: params?.code || 406,
        data: params?.data || null,
        status: params?.status || false,
        message: params?.message || 'Password fail',
      },
      params?.httpStatus || HttpStatus.NOT_ACCEPTABLE,
    );
  }
}

export default new StatusCode();
