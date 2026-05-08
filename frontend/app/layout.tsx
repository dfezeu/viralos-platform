import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ViralOS - AI-Powered Viral Content Platform',
  description: 'Turn one video into viral content for TikTok, YouTube, Instagram, X & LinkedIn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", background: '#0a0a0a', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}