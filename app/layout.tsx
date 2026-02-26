import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lauren Mitchell Photography | Ponca City, OK",
  description:
    "Lauren Mitchell Photography — capturing life's most tender moments. Newborn, family, and portrait photography in Ponca City, Oklahoma.",
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
