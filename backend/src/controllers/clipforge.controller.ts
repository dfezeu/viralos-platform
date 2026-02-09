import { Request, Response } from "express";
import crypto from "crypto";

export function createClip(req: Request, res: Response) {
  const { title, sourceUrl } = req.body;

  res.json({
    success: true,
    clip: {
      id: crypto.randomUUID(),
      title,
      sourceUrl,
      status: "processing"
    }
  });
}
