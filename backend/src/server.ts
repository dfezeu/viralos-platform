import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "./routes/health.js";
import clipforgeRoutes from "./routes/clipforge.js";
import viralScoreRoutes from "./routes/viralScore.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/clipforge", clipforgeRoutes);
app.use("/viral-score", viralScoreRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
