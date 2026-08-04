import "./globals.css";
import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Practical Wellness for Everyday Life`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Practical Wellness for Everyday Life`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900 antialiased">
        {/* Primary navigation */}
        <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold tracking-tighter">CAH<span className="text-gray-400">HEALTH</span></a>
            <div className="flex gap-8 text-sm font-medium text-gray-600">
              <a href="/category/nutrition" className="hover:text-black">Nutrition</a>
              <a href="/category/fitness" className="hover:text-black">Fitness</a>
              <a href="/category/lifestyle" className="hover:text-black">Lifestyle</a>
            </div>
          </div>
        </nav>

        {children}

        {/* Site footer */}
        <footer className="bg-gray-50 border-t py-16 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-sm text-gray-500">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">CAH Health</h4>
              <p>Curated wellness for a better lifestyle. Science-backed, community-driven.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/disclaimer" className="hover:underline">Affiliate Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <p>Business Inquiries: admin@cahhealth.com</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t text-center text-xs text-gray-400">
            © 2026 CAH Health. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
