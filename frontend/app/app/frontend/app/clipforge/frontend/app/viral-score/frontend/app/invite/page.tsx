export default function Invite() {
  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 34, fontWeight: "bold" }}>
        Invite-Only Beta
      </h1>

      <p style={{ marginTop: 12 }}>
        Access unlocked by invite or referrals.
      </p>

      <div style={{ marginTop: 30 }}>
        <input
          placeholder="Enter invite code"
          style={{
            padding: 12,
            width: "100%",
            maxWidth: 320,
            borderRadius: 6
          }}
        />
      </div>

      <button style={{
        marginTop: 16,
        padding: "12px 20px",
        background: "#22C55E",
        borderRadius: 8
      }}>
        Unlock Access
      </button>

      <p style={{ marginTop: 20, opacity: 0.6 }}>
        Invite friends to unlock Pro tools
      </p>
    </main>
  );
}
