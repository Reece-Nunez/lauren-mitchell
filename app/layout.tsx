import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laurenmitchellstudio.com"),
  title: {
    default: "Lauren Mitchell Photography | Ponca City, OK",
    template: "%s | Lauren Mitchell Photography",
  },
  description:
    "Professional maternity, family, newborn & event photographer in Ponca City, Oklahoma. Capturing life's most tender moments.",
  keywords: [
    "photographer",
    "Ponca City photographer",
    "Oklahoma photographer",
    "family photographer",
    "newborn photographer",
    "maternity photographer",
    "event photographer",
    "portrait photographer",
    "wedding photographer",
    "Ponca City Oklahoma",
  ],
  authors: [{ name: "Lauren Mitchell" }],
  creator: "Lauren Mitchell Photography",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lauren Mitchell Photography",
    images: [
      {
        url: "/branding/hero.webp",
        width: 1200,
        height: 630,
        alt: "Lauren Mitchell Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.webp",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
