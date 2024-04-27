import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Login successful',
  })
  login(@Body() loginDto: LoginUserDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a user' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Registration successful',
  })
  register(@Body() registerDto: RegisterUserDto) {
    return this.authService.register(registerDto);
  }
}

// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0ZWZhbnRAZ21haWwuY29tIiwic3ViIjoxLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTQyMTMwMzYsImV4cCI6MTcxNDIxNDgzNn0.pOMd6OHSNx_5g3ZvLpP-vr7Vz-DyLbC1_fwKAgzOsuM"
// }

// Bob:
// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBib2IuY29tIiwic3ViIjoxLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTQyMTM4NDQsImV4cCI6MTcxNDIxNTY0NH0.rUVnMU2A6TEWFdwRPPdZzNSYcntD-Wp4BUE_Ql0_9XE"
// }
