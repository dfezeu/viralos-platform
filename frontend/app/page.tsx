'use client';

export default function Home() {
  return (
    <main className="hero">
      <div className="logo">ViralOS</div>
      <div className="tagline">
        Turn one video into viral content for TikTok, YouTube, Instagram, X & LinkedIn
      </div>

      <div className="links-section">
        <div className="links-title">🚀 Quick Links</div>
        <div className="links-grid">
          <a href="https://viralboss.infinityfreeapp.com" className="link-btn" target="_blank">
            🥇 ViralBoss
          </a>
          <a href="https://madfx-boss-master.vercel.app" className="link-btn" target="_blank">
            📊 MADFX BOSS
          </a>
          <a href="https://maxai.io" className="link-btn" target="_blank">
            🤖 MAXAI
          </a>
          <a href="/dashboard" className="link-btn">
            📈 Dashboard
          </a>
          <a href="/clipforge" className="link-btn">
            🎬 ClipForge
          </a>
          <a href="/viral-score" className="link-btn">
            📊 Viral Score
          </a>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <div className="feature-icon">🎬</div>
          <div className="feature-title">ClipForge</div>
          <div className="feature-description">
            Transform long-form content into viral shorts with AI-powered editing
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">📊</div>
          <div className="feature-title">Viral Score</div>
          <div className="feature-description">
            Predict virality before posting with advanced AI analytics
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">🎨</div>
          <div className="feature-title">Smart Editing</div>
          <div className="feature-description">
            Auto-captions, effects, and optimized formats for every platform
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">📅</div>
          <div className="feature-title">Auto-Schedule</div>
          <div className="feature-description">
            Post at the optimal times for maximum engagement
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-title">Early Access</div>
        <div className="cta-description">
          Be the first to experience viral content creation on autopilot.
        </div>
        <form className="email-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks for joining!'); }}>
          <input 
            type="email" 
            className="email-input" 
            placeholder="Enter your email for early access" 
            required 
          />
          <button type="submit" className="submit-btn">Join</button>
        </form>
      </div>

      <div className="footer">
        <p>© 2026 Viralos. All rights reserved.</p>
        <p>
          <a href="https://madfx-boss-master.vercel.app">MADFX BOSS</a> •{' '}
          <a href="https://maxai.io">MAXAI</a> •{' '}
          <a href="https://viralboss.infinityfreeapp.com">ViralBoss</a>
        </p>
      </div>
    </main>
  );
}