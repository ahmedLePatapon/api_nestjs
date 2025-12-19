// src/modules/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto) {
        const user = this.usersService.findByEmail(loginDto.email);

        if (!user || user.password !== loginDto.password) {
            throw new UnauthorizedException('Identifiants invalides');
        }

        const payload = { email: user.email, sub: user.id, name: user.name };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        };
    }

    async validateUser(userId: number) {
        return this.usersService.findOne(userId);
    }
}