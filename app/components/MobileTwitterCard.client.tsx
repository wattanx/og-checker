"use client";

export type TwitterCardProps = {
  ogImage: string;
  ogTitle: string;
  hostname: string;
};
export const MobileTwitterCard: React.FC<TwitterCardProps> = ({
  ogImage,
  ogTitle,
  hostname,
}) => {
  return (
    <div
      className={`flex w-full max-w-[399px] flex-col overflow-hidden rounded-[16px] border-[1px] border-[#38444d]`}
    >
      <div
        className="border-b-[1px] border-b-[#38444d] bg-cover bg-center pb-[52.356%]"
        style={{
          backgroundImage: `url('${ogImage}')`,
        }}
      ></div>
      <div className="p-[11px]">
        <p className="text-sm text-[#8b98a5]">{hostname}</p>
        <p className=" text-sm">{ogTitle}</p>
      </div>
    </div>
  );
};
