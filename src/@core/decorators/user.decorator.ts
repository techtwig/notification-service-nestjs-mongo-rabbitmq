import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export interface IAuthUser {
  _id: string;
  full_name: string;
  username: string;
  email: string;
  mobile: string;

  [x: string]: any;
}

export const AuthUser = createParamDecorator(
  async (data: any, ctx: ExecutionContext): Promise<IAuthUser | null> => {
    const request = ctx.switchToHttp().getRequest();
    const [, authorizationToken] = (
      request.headers?.authorization?.toString() || ''
    ).split(' ');

    if (
      !authorizationToken?.length
    ) {
      return null;
    }

    try {
      const tokenParts = authorizationToken.split('.');

      const buffer = Buffer.from(tokenParts[1], 'base64');
      const userId = buffer.toString();

      if (!userId) {
        return null;
      }

      return userId;
    } catch (e) {
      return null;
    }
  },
);

export const AuthUser = (data?: 'optional' | null) =>
  JWTUser(new PreAuthUserPipe(data), AuthUserPipe);
