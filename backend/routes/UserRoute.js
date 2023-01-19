import e, { Router } from 'express';
import { getUsers } from '../controllers/UserController.js';

const router = Router();

router.get('/users', getUsers);

export default router;