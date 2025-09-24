import type { Metadata } from "next";
import "./globals.css";
import './assets/css/styles.css'
import './assets/css/colors.css'

export const metadata: Metadata = {
  title: "Asta GO - Next Js Real Estate Template",
  description: "Asta GO - Next Js Real Estate Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="blue-skin">
        {children}
      </body>
    </html>
  );
}
