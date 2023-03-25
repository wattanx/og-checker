"use client";

export const Footer: React.FC = () => {
  return (
    <footer className="p-7">
      <div className="flex items-center justify-center">
        <div className="flex flex-col space-y-4">
          <a
            className="pb-2 text-center text-sm"
            href="https://wattanx.dev/"
            target="_blank"
          >
            © {new Date().getFullYear()} wattanx
          </a>
        </div>
      </div>
    </footer>
  );
};
