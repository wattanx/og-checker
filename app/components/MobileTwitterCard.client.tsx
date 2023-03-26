"use client";

export type TwitterCardProps = {
  device: "pc" | "mobile";
  ogImage: string;
  ogTitle: string;
  hostname: string;
};
export const MobileTwitterCard: React.FC<TwitterCardProps> = ({
  device,
  ogImage,
  ogTitle,
  hostname,
}) => {
  const size = device === "pc" ? "max-w-[505px]" : "max-w-[399px]";

  return (
    <div
      className={`${size} flex w-full flex-col overflow-hidden rounded-[16px] border-[1px] border-[#38444d]`}
    >
      <div
        className="bg-cover bg-center pb-[52.356%]"
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
