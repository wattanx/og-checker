"use client";

export type TwitterSummaryCardProps = {
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  hostname: string;
};
export const TwitterSummaryCard: React.FC<TwitterSummaryCardProps> = ({
  ogImage,
  ogTitle,
  hostname,
  ogDescription,
}) => {
  return (
    <div
      className={`flex max-h-[125px] w-full max-w-[505px] flex-row overflow-hidden rounded-[16px] border-[1px] border-[#38444d]`}
    >
      <div
        className="h-[125px] w-[125px] border-r-[1px] border-r-[#38444d] bg-cover bg-center"
        style={{
          backgroundImage: `url('${ogImage}')`,
        }}
      ></div>
      <div className="w-[381px] space-y-1 p-[11px]">
        <p className="text-sm text-[#8b98a5]">{hostname}</p>
        <p className=" text-sm">{ogTitle}</p>
        <p className="text-sm text-[#8b98a5]">{ogDescription}</p>
      </div>
    </div>
  );
};
