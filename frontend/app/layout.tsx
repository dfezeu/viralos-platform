export const metadata = {
  title: "Viralos",
  description: "AI content growth machine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#0B0F19", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
