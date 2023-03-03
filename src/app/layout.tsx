import './globals.css';

export const metadata = {
  title: 'gregasquith.com',
  description: 'Greg Asquith | Technical consulting and solution creation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
