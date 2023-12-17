import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/toaster";
import SessionProvider from "@/components/session.provider";
import { OverlayBlockerProvider } from "@/components/overlay-blocker";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Santabot",
  description: "Generate happy moments!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        <OverlayBlockerProvider>
          <Toaster />
          <SessionProvider />
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
        </OverlayBlockerProvider>
      </body>
    </html>
  );
}
