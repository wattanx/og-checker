"use client";
import type { MetaFieldType } from "@/types/meta-field";
const labelDic = {
  title: "title",
  description: "description",
  ogUrl: "og:url",
  ogType: "og:type",
  ogTitle: "og:title",
  ogDescription: "og:description",
  ogSiteName: "og:site_name",
  twitterCard: "twitter:card",
  twitterSite: "twitter:site",
  ogImage: "og:image",
} satisfies Record<keyof MetaFieldType, string>;

export type MetaFieldProps = MetaFieldType;

export const MetaField: React.FC<MetaFieldProps> = (props) => {
  const metaFieldKeys = Object.keys(props) as (keyof MetaFieldType)[];

  return (
    <table className=" w-full">
      <thead>
        <tr className="border-b-[1px] border-b-gray-500">
          <th className="px-4 py-2 text-left">property</th>
          <th className="px-4 py-2 text-left">value</th>
        </tr>
      </thead>
      <tbody className=" divide-y-[1px] divide-gray-500">
        {metaFieldKeys.map((x) => (
          <tr key={x}>
            <td className="px-4 py-2">{labelDic[x]}</td>
            <td className=" px-4 py-2">{props[x]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
