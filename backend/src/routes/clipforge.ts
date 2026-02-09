import { Router } from 'express';
import { createClip } from '../controllers/clipforge.controller';

const router = Router();

router.post('/create', createClip);

export default router;
