import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UCOM Technology",
  description: "Your Modern Business Telco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.className} h-full antialiased`}>
      <head>
        {/*
          TODO: Add Adobe Fonts kit link here for "neue-kabel"
          e.g. <link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css" />

          TODO: Add "Articulat CF" — either via Adobe Fonts kit above
          or as a self-hosted @font-face in globals.css
        */}
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
