import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furqan Waris - Portfolio",
  description:
    "Full-Stack AI Engineer and Computer Science graduate skilled in bridging modern web architectures with applied artificial intelligence. Adept at building end-to-end, AI-powered applications.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Furqan Waris - Portfolio",
    description:
      "Full-Stack AI Engineer and Computer Science graduate skilled in bridging modern web architectures with applied artificial intelligence. Adept at building end-to-end, AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} ${caveat.variable} h-full`}
    >
      <body className="h-full w-full bg-[#f5f6f3] text-[#181616] antialiased selection:bg-[#181616] selection:text-white overflow-hidden">
        <main className="h-full w-full overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
