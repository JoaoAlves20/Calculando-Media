import userService from "../service/user.service.js";

export class UserController {
    async findAll(_, response) {
        try {
            const users = await userService.findAll();
            response.status(200).json(users);
        } catch (error) {
            response.status(500).json({ error: 'An error occurred while fetching users.' });
        }
    }

    async findById(request, response) {
        const { id } = request.params;
        try {
            const user = await userService.findById(id);
            
            if (!user) {
                response.status(404).json({ error: 'User not found.' });
            }

            response.status(200).json(user);
        } catch (error) {
            response.status(500).json({ error: 'An error occurred while fetching the user.' });
        }
    }
}

export default new UserController();