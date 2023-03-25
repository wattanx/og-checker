import Image from "next/image";
import { Inter } from "next/font/google";
import { OgChecker } from "./components/OgChecker.client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="my-0 mx-auto min-h-screen max-w-[850px] py-12 px-6">
      <OgChecker />
    </main>
  );
}
