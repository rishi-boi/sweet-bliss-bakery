import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair", // optional CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sweetblissbakery.com"),
  title: "Sweet Bliss Bakery - Hand-Crafted Cakes for Your Sweetest Moments",
  description:
    "Experience the magic of Sweet Bliss Bakery's hand-crafted cakes. Perfect for weddings, birthdays, and special celebrations. Made with love, baked to delight in Pune, MH.",
  keywords: [
    "bakery",
    "cakes",
    "wedding cakes",
    "birthday cakes",
    "custom cakes",
    "Pune bakery",
    "handcrafted cakes",
    "celebration cakes",
  ],
  authors: [{ name: "Sweet Bliss Bakery" }],
  openGraph: {
    title: "Sweet Bliss Bakery - Hand-Crafted Cakes",
    description:
      "Crafted with love, baked to delight. Perfect cakes for your sweetest moments.",
    url: "https://sweetblissbakery.com",
    siteName: "Sweet Bliss Bakery",
    images: [
      {
        url: "/assests/cake1.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful wedding cake from Sweet Bliss Bakery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Bliss Bakery - Hand-Crafted Cakes",
    description:
      "Crafted with love, baked to delight. Perfect cakes for your sweetest moments.",
    images: ["/assests/cake1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playFairDisplay.variable} `}>
        {children}
      </body>
    </html>
  );
}
