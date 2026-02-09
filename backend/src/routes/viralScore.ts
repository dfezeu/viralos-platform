import { Router } from 'express';
import { calculateViralScore } from '../controllers/viralScore.controller';

const router = Router();

router.post('/calculate', calculateViralScore);

export default router;
