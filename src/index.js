import express from 'express';

import { router } from './router.js';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.use('/users', router)

server.listen(3000, () => console.log('Server is running on http://localhost:3000'));