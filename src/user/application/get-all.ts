import type { IUser } from '../domain/IUser.js';

export class GetUsers {
  constructor(private userRepository: IUser) {}

  async run() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
