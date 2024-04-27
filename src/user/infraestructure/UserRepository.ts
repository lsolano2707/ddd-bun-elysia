import type { IUser } from '../domain/IUser.js';
import { User } from '../domain/User.js';
import { PrismaClient } from '@prisma/client';

export class UserRepository implements IUser {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }
  async create(email: string, password: string): Promise<User> {
    const user = await this.db.user.create({
      data: {
        email,
        password,
      },
    });

    return new User(user.id, user.email, user.password);
  }

  async find(email: string): Promise<User | null> {
    const user = await this.db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return new User(user.id, user.email, user.password);
  }

  async findAll(): Promise<User[]> {
    const users = await this.db.user.findMany();
    return users.map((user) => new User(user.id, user.email, user.password));
  }
}
