import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "EsporoGuia | Entenda a Esporotricose",
  description: "Aprenda de forma clara, visual e humana sobre a esporotricose causada pelo Sporothrix brasiliensis.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#fdfaf7] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}