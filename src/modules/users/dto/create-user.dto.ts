// src/modules/users/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsEmail({}, { message: 'Email invalide' })
    @IsNotEmpty({ message: 'L\'email est requis' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Le nom est requis' })
    @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Le mot de passe est requis' })
    @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
    password: string;
}