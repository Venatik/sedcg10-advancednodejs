import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(pass, user.password);
      if (isPasswordValid) {
        delete user.password;
        return user;
      }
    }
  }

  async register({ email, password, role }: RegisterUserDto) {
    // Check if user already exists
    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    // It ensures that even if two users have the same password, the hashed password will be different

    // Rounds refers to the number of iterations the hashing algorithm will go through to generate the hash
    // Each round makes the hash calculation more complex and time-consuming.
    const saltOrRound = 10;
    const hash = await bcrypt.hash(password, saltOrRound);

    const user = await this.userService.create(email, hash, role);

    delete user.password;
    return user;
  }

  async login(user: LoginUserDto) {
    const validUser = await this.validateUser(user.email, user.password);

    if (!validUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      email: validUser.email,
      sub: validUser.id, // main subject of the token
      role: validUser.role,
    };

    const accessToken = this.jwtService.sign(payload);
    return {
      accessToken,
    };
  }
}
