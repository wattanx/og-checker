"use client";
import { RecoilRoot } from "recoil";

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
