import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ra-hidayah.vercel.app"
  ),
  title: {
    default: "PAUD Hidayah Tayu - Tumbuh Ceria, Mandiri & Berkarakter Islami",
    template: "%s | PAUD Hidayah Tayu",
  },
  description:
    "Pendidikan Anak Usia Dini (PAUD / RA) berbasis bermain aktif dan kurikulum sentra dengan pembiasaan nilai-nilai Islami sejak dini. Melayani Kelompok Bermain (Playgroup), TK A, TK B, dan Ekstrakurikuler di Tayu, Pati, Jawa Tengah.",
  keywords: [
    "PAUD Hidayah",
    "RA Hidayah",
    "PAUD Hidayah Tayu",
    "TK Islam Tayu",
    "Playgroup Tayu Pati",
    "Pendidikan Anak Usia Dini Pati",
    "Sekolah Islam Ramah Anak",
    "PPDB PAUD Hidayah",
  ],
  authors: [{ name: "PAUD Hidayah Tayu", url: "https://ra-hidayah.vercel.app" }],
  creator: "PAUD Hidayah Tayu",
  publisher: "Yayasan Hidayah Tayu",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/logo-paud.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ra-hidayah.vercel.app",
    siteName: "PAUD Hidayah Tayu",
    title: "PAUD Hidayah Tayu - Tumbuh Ceria, Mandiri & Berkarakter Islami",
    description:
      "Pendidikan Anak Usia Dini (PAUD / RA) berbasis kurikulum sentra dan nilai-nilai Islami. Menerima Playgroup, TK A, TK B, dan Ekstrakurikuler di Tayu, Pati.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PAUD Hidayah Tayu - Sekolah Ramah Anak Berkarakter Islami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAUD Hidayah Tayu - Tumbuh Ceria, Mandiri & Berkarakter Islami",
    description:
      "Pendidikan Anak Usia Dini berbasis kurikulum sentra dan pembiasaan nilai-nilai Islami di Tayu, Pati.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD@200..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
