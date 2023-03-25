"use client";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-[99] bg-gray-900 py-4 px-0">
      <div className="my-0 mx-auto max-w-[850px] py-0 px-6">
        <div className="flex flex-row items-center justify-between font-bold">
          <a href="/" className="items-center no-underline">
            OG Checker
          </a>
        </div>
      </div>
    </header>
  );
};
