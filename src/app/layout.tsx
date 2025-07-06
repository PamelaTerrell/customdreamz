import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="p-4 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold">Custom Dreamz Motorsports</h1>
        </header>
        <nav className="p-4 flex gap-4 justify-center border-b border-gray-700">
  <a href="/" className="hover:underline">Home</a>
  <a href="/about" className="hover:underline">About</a>
  <a href="/services" className="hover:underline">Services</a>
  <a href="/gallery" className="hover:underline">Gallery</a>
  <a href="/contact" className="hover:underline">Contact</a>
</nav>

        <main>{children}</main>
        <footer className="p-4 text-center border-t border-gray-700 mt-8">
          <p>&copy; {new Date().getFullYear()} Custom Dreamz Motorsports</p>
        </footer>
      </body>
    </html>
  );
}
