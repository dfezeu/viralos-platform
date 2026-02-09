const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend connected' });
});

// ClipForge
app.post('/api/clipforge', (req, res) => {
  const { prompt } = req.body;

  res.json({
    success: true,
    clips: [
      { id: 1, title: 'Hook Clip', score: 87 },
      { id: 2, title: 'Retention Clip', score: 92 }
    ]
  });
});

// Viral Score
app.post('/api/viral-score', (req, res) => {
  const { content } = req.body;

  res.json({
    score: Math.floor(Math.random() * 40) + 60,
    verdict: 'High viral potential'
  });
});

// Feed
app.get('/api/feed', (req, res) => {
  res.json([
    { id: 1, title: '🔥 Trending Clip', score: 91 },
    { id: 2, title: '🎯 Growth Clip', score: 84 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
