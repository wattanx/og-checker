"use client";

export type TwitterSummaryCardProps = {
  ogImage: string;
  ogTitle: string;
  hostname: string;
};
export const MobileTwitterSummaryCard: React.FC<TwitterSummaryCardProps> = ({
  ogImage,
  ogTitle,
  hostname,
}) => {
  return (
    <div
      className={`flex max-h-[125px] w-full max-w-[340px] flex-row overflow-hidden rounded-[16px] border-[1px] border-[#38444d]`}
    >
      <div
        className="h-[78px] w-[78px] border-r-[1px] border-r-[#38444d] bg-cover bg-center"
        style={{
          backgroundImage: `url('${ogImage}')`,
        }}
      ></div>
      <div className="max-w-[262px] space-y-1 p-[11px]">
        <p className="text-sm text-[#8b98a5]">{hostname}</p>
        <p className=" text-sm">{ogTitle}</p>
      </div>
    </div>
  );
};
