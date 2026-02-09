import { Request, Response } from 'express';

export function calculateViralScore(req: Request, res: Response) {
  const { views, likes, shares } = req.body;

  const score = Math.min(
    100,
    Math.round((views * 0.2 + likes * 0.5 + shares * 1.5) / 10)
  );

  res.json({
    success: true,
    viralScore: score
  });
}
