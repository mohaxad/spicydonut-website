import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpicyDonut - Leading AI Innovation in Saudi Arabia",
  description: "SpicyDonut is revolutionizing the digital landscape with cutting-edge AI solutions. From SpicySearch to enterprise platforms, we're building the technologies that will shape tomorrow.",
  keywords: "AI, artificial intelligence, Saudi Arabia, SpicySearch, machine learning, technology, innovation",
  authors: [{ name: "SpicyDonut" }],
  creator: "SpicyDonut",
  publisher: "SpicyDonut",
  openGraph: {
    title: "SpicyDonut - Leading AI Innovation in Saudi Arabia",
    description: "Revolutionary AI solutions from the heart of Saudi Arabia",
    url: "https://spicydonut.ai",
    siteName: "SpicyDonut",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpicyDonut - Leading AI Innovation in Saudi Arabia",
    description: "Revolutionary AI solutions from the heart of Saudi Arabia",
    creator: "@spicydonut",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
