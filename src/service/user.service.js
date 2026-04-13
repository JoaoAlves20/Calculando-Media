import { users } from '../mocks/users.js';

export class UserService {
    findAll() {
        return new Promise((resolve) => resolve(users));
    }

    findById(id) {
        return new Promise((resolve) => {
            const user = users.find(result => result.id === +id);
            return resolve(user);
        })
    }
}

export default new UserService();