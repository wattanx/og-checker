"use client";
import { useState } from "react";
import { MetaField } from "./MetaField.client";
import { metaFieldParser } from "@/framework/meta-field-parser";
import { MetaFieldType } from "@/types/meta-field";
import { TwitterCard } from "./TwitterCard";
import { MobileTwitterCard } from "./MobileTwitterCard.client";

export const OgChecker: React.FC = () => {
  const [url, setUrl] = useState("");
  const [meta, setMeta] = useState<MetaFieldType>();
  const [hostname, setHostname] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onCheck = async () => {
    const res = await fetch(url);
    const htmlString = await res.text();

    const metaField = metaFieldParser(htmlString);
    setMeta(metaField);
    setHostname(new URL(url).hostname);
  };
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <p>Please enter the URL.</p>
        <input
          className="w-full rounded-md border-[1px] border-gray-500 bg-gray-900 py-2 px-4 outline-none"
          type="text"
          onChange={onChange}
          placeholder="https://"
        />
        <div className=" flex justify-center">
          <button
            onClick={onCheck}
            type="button"
            className="  w-32 rounded-md bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] px-4 py-2"
          >
            Check
          </button>
        </div>
      </div>
      {meta && (
        <div className="mt-4 overflow-x-auto rounded-md border-[1px] border-gray-500">
          <MetaField {...meta} />
        </div>
      )}
      {meta && meta.ogImage && (
        <div className="mt-4 hidden flex-col space-y-4 sm:flex">
          <p>Twitter PC Large</p>
          <TwitterCard
            ogImage={meta.ogImage}
            hostname={hostname}
            ogTitle={meta.ogTitle}
            ogDescription={meta.ogDescription}
          />
        </div>
      )}
      {meta && meta.ogImage && (
        <div className="mt-4 flex flex-col space-y-4">
          <p>Twitter mobile Large</p>
          <MobileTwitterCard
            device="mobile"
            ogImage={meta.ogImage}
            hostname={hostname}
            ogTitle={meta.ogTitle}
          />
        </div>
      )}
    </div>
  );
};
