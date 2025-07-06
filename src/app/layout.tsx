import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="p-4 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold">Custom Dreamz Motorsports</h1>
        </header>
        <nav className="p-4 flex gap-4 justify-center border-b border-gray-700">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <main>{children}</main>
        <footer className="p-4 text-center border-t border-gray-700 mt-8">
          <p>&copy; {new Date().getFullYear()} Custom Dreamz Motorsports</p>
        </footer>
      </body>
    </html>
  );
}
