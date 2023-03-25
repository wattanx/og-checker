import { Header } from "./Header.client";
import { Footer } from "./Footer.client";
import "./globals.css";

export const metadata = {
  title: "OG Checker",
  description:
    "This site allows you to easily check your website's OGP (Open Graph Protocol) and Twitter cards.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
