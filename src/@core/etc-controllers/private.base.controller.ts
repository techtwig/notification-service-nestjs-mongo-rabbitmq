import {ApiBearerAuth} from '@nestjs/swagger';
import {AppBaseController} from './app.base.controller';

@ApiBearerAuth('Authorization')
export class PrivateBaseController extends AppBaseController {
}
