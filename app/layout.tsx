import { Header } from "./Header.client";
import { Footer } from "./Footer.client";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://og-checker.vercel.app";

export const metadata = {
  title: "OG Checker",
  description:
    "This site allows you to easily check your website's OGP (Open Graph Protocol) and Twitter cards.",
  icons: {
    icon: "/og_checker_icon.png",
    shortcut: "/og_checker_icon.png",
    apple: "/og_checker_icon.png",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "OG Checker",
    description:
      "This site allows you to easily check your website's OGP (Open Graph Protocol) and Twitter cards.",
    siteName: "OG Checker",
    type: "website",
    url: "https://og-checker.vercel.app/",
    images: [
      {
        url: `${baseUrl}/og_checker_ogp.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
