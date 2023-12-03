import { Router } from 'express';
const router = Router();

// Controllers
import { create } from '../controllers/users/create.js';
import { get } from '../controllers/users/get.js';
import { getByID } from '../controllers/users/getByID.js';
import { updateByID } from '../controllers/users/updateByID.js';
import { deleteByID } from '../controllers/users/deleteByID.js';

// Endpoints
router.post('/', create);
router.get('/', get);
router.get('/:id', getByID);
router.put('/:id', updateByID);
router.delete('/:id', deleteByID);

export default router;
