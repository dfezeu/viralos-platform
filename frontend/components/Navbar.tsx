import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "16px 32px",
      borderBottom: "1px solid #222"
    }}>
      <strong>Viralos</strong>

      <div style={{ display: "flex", gap: 16 }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/clipforge">ClipForge</Link>
        <Link href="/viral-score">Viral Score</Link>
        <Link href="/feed">Feed</Link>
        <Link href="/invite">Invite</Link>
      </div>
    </nav>
  );
}
