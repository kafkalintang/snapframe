import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snapframe — Capture the moment. Frame the memory.",
  description:
    "Photobooth digital yang lucu, modern, dan bisa dikustomisasi. Ambil foto dengan kamera HP atau laptop, pilih layout, hias frame, dan unduh hasilnya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-cloud text-ink dark:bg-[#0B1220] dark:text-snap-100">
        {children}
      </body>
    </html>
  );
}