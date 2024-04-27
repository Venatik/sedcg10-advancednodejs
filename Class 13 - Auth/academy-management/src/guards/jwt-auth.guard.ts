import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  // This method is used to handle the result of the JWT validation attempt
  handleError(error, user) {
    if (error || !user) {
      throw error || new UnauthorizedException();
    }
    return user;
  }
}
