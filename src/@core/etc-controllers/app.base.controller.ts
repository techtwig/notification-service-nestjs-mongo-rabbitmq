import { UseFilters } from '@nestjs/common';

import { AllExceptionFilter } from '../filters/all-exception.filter';

@UseFilters(new AllExceptionFilter())
export class AppBaseController {}
