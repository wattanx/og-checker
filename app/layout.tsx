import { Header } from "./Header.client";
import { Footer } from "./Footer.client";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";

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
    canonical:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://og-checker.vercel.app",
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
