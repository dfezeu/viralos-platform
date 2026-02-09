import { Router } from "express";
import { calculateViralScore } from "../controllers/viralScore.controller.js";

const router = Router();

router.post("/", calculateViralScore);

export default router;
