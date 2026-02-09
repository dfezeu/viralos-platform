import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "Backend running 🚀" });
});

app.get("/api/clipforge", (_req, res) => {
  res.json({
    tool: "ClipForge",
    message: "Create and manage viral clips"
  });
});

app.get("/api/viral-score", (_req, res) => {
  res.json({
    score: Math.floor(Math.random() * 100)
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
