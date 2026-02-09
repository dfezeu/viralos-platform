import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import healthRoute from './routes/health';
import clipforgeRoute from './routes/clipforge';
import viralScoreRoute from './routes/viralScore';

dotenv.config();

export function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/api/health', healthRoute);
  app.use('/api/clipforge', clipforgeRoute);
  app.use('/api/viral-score', viralScoreRoute);

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
  });
}
