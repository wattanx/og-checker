"use client";

export type TwitterCardProps = {
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  hostname: string;
};
export const TwitterCard: React.FC<TwitterCardProps> = ({
  ogImage,
  ogTitle,
  hostname,
  ogDescription,
}) => {
  return (
    <div
      className={`flex w-full max-w-[505px] flex-col overflow-hidden rounded-[16px] border-[1px] border-[#38444d]`}
    >
      <div
        className="h-[254px] w-[506px] border-b-[1px] border-b-[#38444d] bg-cover bg-center"
        style={{
          backgroundImage: `url('${ogImage}')`,
        }}
      ></div>
      <div className="space-y-1 p-[11px]">
        <p className="text-sm text-[#8b98a5]">{hostname}</p>
        <p className=" text-sm">{ogTitle}</p>
        <p className="text-sm text-[#8b98a5]">{ogDescription}</p>
      </div>
    </div>
  );
};
