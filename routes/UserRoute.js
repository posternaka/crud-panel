import { Router } from 'express';
import { getUsers, createUser, updateUsers, deleteUsers, signIn } from '../controllers/UserController.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.post('/signin', signIn);
router.patch('/users', updateUsers);
router.delete('/users', deleteUsers);

export default router;