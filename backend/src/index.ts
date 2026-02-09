import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ status: 'Viralos backend running' });
});

app.get('/api/clipforge', (_req, res) => {
  res.json({ message: 'ClipForge API connected' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
