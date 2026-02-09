import { Router } from "express";
import { createClip } from "../controllers/clipforge.controller.js";

const router = Router();

router.post("/", createClip);

export default router;
