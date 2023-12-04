import { Router } from 'express';
const router = Router();

// Controllers
import { create } from '../controllers/votos/create.js';
import { getAll } from '../controllers/votos/getAll.js';

// Endpoints
router.post('/', create);
router.get('/', getAll);

export default router;
