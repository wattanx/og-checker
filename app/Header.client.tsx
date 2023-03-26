"use client";

import { GitHubIcon } from "./components/GitHubIcon.client";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-[99] bg-gray-900 py-4 px-0">
      <div className="my-0 mx-auto max-w-[850px] py-0 px-6">
        <div className="flex flex-row items-center justify-between font-bold">
          <a
            href="/"
            className=" items-center bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-2xl font-bold text-[transparent] no-underline"
          >
            OG Checker
          </a>
          <a href="https://github.com/wattanx/og-checker" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  );
};
