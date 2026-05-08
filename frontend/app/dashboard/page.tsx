'use client';

import Link from 'next/link';

export default function Dashboard() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '40px 20px',
      background: '#0a0a0a'
    }}>
      <div style={{
        fontSize: '4rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #3b82f6, #00d4ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px'
      }}>
        Dashboard
      </div>
      <div style={{
        fontSize: '1.5rem',
        color: '#64748b',
        marginBottom: '50px'
      }}>
        Your viral content command center
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: '25px', 
        marginBottom: '40px',
        maxWidth: '1000px' 
      }}>
        <div style={{ background: '#0d1525', border: '1px solid #1e3a5f', borderRadius: '16px', padding: '30px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📊</div>
          <div style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '15px', color: '#3b82f6' }}>Analytics</div>
          <div style={{ color: '#64748b' }}>Track performance across all platforms</div>
        </div>
        <div style={{ background: '#0d1525', border: '1px solid #1e3a5f', borderRadius: '16px', padding: '30px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🎬</div>
          <div style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '15px', color: '#3b82f6' }}>ClipForge</div>
          <div style={{ color: '#64748b' }}>Turn long videos into viral shorts</div>
        </div>
        <div style={{ background: '#0d1525', border: '1px solid #1e3a5f', borderRadius: '16px', padding: '30px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🎯</div>
          <div style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '15px', color: '#3b82f6' }}>Viral Score</div>
          <div style={{ color: '#64748b' }}>Predict performance before posting</div>
        </div>
      </div>

      <a href="/" style={{ 
        display: 'inline-block',
        padding: '16px 32px', 
        background: '#0d1525', 
        border: '1px solid #1e3a5f', 
        borderRadius: '12px', 
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 500
      }}>← Back Home</a>
    </main>
  );
}