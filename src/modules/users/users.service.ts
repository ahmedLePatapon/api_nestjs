// src/modules/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 1, email: 'test@example.com', name: 'John Doe', createdAt: new Date() },
    ];
    private idCounter = 2;

    create(createUserDto: CreateUserDto): User {
        const user: User = {
            id: this.idCounter++,
            ...createUserDto,
            createdAt: new Date(),
        };
        this.users.push(user);
        return user;
    }

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            throw new NotFoundException(`Utilisateur avec l'ID ${id} introuvable`);
        }
        return user;
    }

    findByEmail(email: string): User | undefined {
        return this.users.find(u => u.email === email);
    }

    update(id: number, updateUserDto: UpdateUserDto): User {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            throw new NotFoundException(`Utilisateur avec l'ID ${id} introuvable`);
        }

        this.users[userIndex] = {
            ...this.users[userIndex],
            ...updateUserDto,
        };

        return this.users[userIndex];
    }

    remove(id: number): void {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            throw new NotFoundException(`Utilisateur avec l'ID ${id} introuvable`);
        }
        this.users.splice(userIndex, 1);
    }
}