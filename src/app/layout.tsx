import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAH Health | Minimalist Living",
  description: "Modern wellness and lifestyle curation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <nav className="border-b border-gray-100 py-6 px-8 flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-xl font-bold tracking-tighter">CAH<span className="text-gray-400">HEALTH</span></span>
        </nav>
        {children}
        <footer className="py-12 text-center text-sm text-gray-400 border-t mt-20">
          <p>© 2026 CAH Health. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
