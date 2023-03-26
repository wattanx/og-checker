"use client";

import { useToast } from "@/dataflow/toast";

export const Toast: React.FC = () => {
  const { toastMessage, closeToast } = useToast();
  return (
    <div className="flex w-full justify-center">
      <div
        onClick={closeToast}
        className="fixed bottom-0 top-auto mx-auto mb-4 flex h-12 w-auto animate-slide-in-down items-center justify-center rounded-full bg-[#FC8181] p-4 text-center"
      >
        {toastMessage}
      </div>
    </div>
  );
};
