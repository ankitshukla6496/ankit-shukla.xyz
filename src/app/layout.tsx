import type { Metadata } from "next";
import { Inter, Space_Grotesk, Pinyon_Script, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display',
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-signature',
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: '--font-dancing',
});


export const metadata: Metadata = {
  metadataBase: new URL("https://ankit-shukla.xyz"),
  title: {
    default: "Ankit Shukla",
    template: "%s | Ankit Shukla",
  },
  description: "Personal website of Ankit Shukla — portfolio, blog, and more.",
  openGraph: {
    title: "Ankit Shukla",
    description: "Personal website of Ankit Shukla.",
    url: "https://ankit-shukla.xyz",
    siteName: "Ankit Shukla",
    locale: "en_US",
    type: "website",
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
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${pinyonScript.variable} ${dancingScript.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
