// src/modules/users/entities/user.entity.ts
export class User {
    id: number;
    email: string;
    name: string;
    password?: string;
    createdAt: Date;
}