import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TapLab - Digital Menus',
  description: 'Smart digital menus for restaurants',
  keywords: 'digital menu, restaurant menu, online menu, QR menu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
