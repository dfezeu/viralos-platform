const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getHealth() {
  const res = await fetch(`${API_BASE}/api/health`);
  return res.json();
}

export async function getClipForge() {
  const res = await fetch(`${API_BASE}/api/clipforge`);
  return res.json();
}

export async function getViralScore() {
  const res = await fetch(`${API_BASE}/api/viral-score`);
  return res.json();
}
