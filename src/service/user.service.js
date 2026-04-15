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

    create(userData) {
        return new Promise((resolve) => {
            const newUser = { id: users.length + 1, ...userData };
            users.push(newUser);
            return resolve(newUser);
        })
    }
}

export default new UserService();