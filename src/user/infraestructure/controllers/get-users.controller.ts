import { GetUsers } from '../../application/get-all.js';

export class GetUsersController {
  constructor(private service: GetUsers) {}

  async run() {
    try {
      console.log('ENTER 1');

      const users = await this.service.run();
      return {
        status: 200,
        data: users,
      };
    } catch (e) {
      const error = e as Error;
      return {
        status: 500,
        message: error.message,
      };
    }
  }
}
