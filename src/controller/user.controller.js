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
        const { id, disciplina } = request.params;
        try {
            const user = await userService.findById(id);

            if (!user) {
                response.status(404).json({ error: 'User not found.' });
            }

            const somaMatematica = user.disciplinas[disciplina].reduce((acc, nota) => acc + nota, 0);
            const media = somaMatematica / user.disciplinas[disciplina].length;

            response.status(200).json({ message: `A média de ${disciplina} do usuário ${user.username} é ${media.toFixed(2)}` });
        } catch (error) {
            response.status(500).json({ error: 'An error occurred while fetching the user.' });
        }
    }
}

export default new UserController();