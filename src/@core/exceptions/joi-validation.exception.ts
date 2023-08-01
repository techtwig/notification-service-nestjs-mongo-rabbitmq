import { BadRequestException } from '@nestjs/common';

export class JoiValidationException extends BadRequestException {
  constructor(objectOrError?: string | object | any, description?: string) {
    super(objectOrError, description);
  }
}
