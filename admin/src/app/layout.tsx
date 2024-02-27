import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from './components/Toast/toasterProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Catalogue Admin",
  description: "Next Generation E-Commerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` flex flex-col h-screen ${inter.className}`}>
  
        <ToastProvider>
        {children}
        </ToastProvider>
        </body>
    </html>
  );
}
