"use client";
import { useState } from "react";
import { z } from "zod";
import { MetaField } from "./MetaField.client";
import { metaFieldParser } from "@/framework/meta-field-parser";
import { MetaFieldType } from "@/types/meta-field";
import { TwitterCard } from "./TwitterCard.client";
import { MobileTwitterCard } from "./MobileTwitterCard.client";
import { TwitterSummaryCard } from "./TwitterSummaryCard.client";
import { MobileTwitterSummaryCard } from "./MobileTwitterSummaryCard.client";
import { useToast } from "@/dataflow/toast";
import { Toast } from "./Toast.client";

const schema = z.string().url();

export const OgChecker: React.FC = () => {
  const [url, setUrl] = useState("");
  const [meta, setMeta] = useState<MetaFieldType>();
  const [hostname, setHostname] = useState("");
  const [isLocalhost, setIsLocalhost] = useState(false);
  const { toastShown, showToast } = useToast();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onCheck = async () => {
    try {
      schema.parse(url);

      const res = isLocalhost
        ? await fetch(url)
        : await fetch(`/api/og_checker?url=${url}`);
      const htmlString = await res.text();

      const metaField = metaFieldParser(htmlString);
      setMeta(metaField);
      setHostname(new URL(url).hostname);
    } catch (err) {
      if (err instanceof z.ZodError) {
        showToast({
          type: "error",
          message: err.issues[0].message,
        });
      } else {
        showToast({
          type: "error",
          message:
            "There is an anomaly in the target URL or an anomaly occurred during analysis",
        });
      }
    }
  };
  return (
    <div>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onCheck();
        }}
      >
        <p>Please enter the URL.</p>

        <div className=" space-y-2">
          <input
            className="peer w-full rounded-md border-[1px] border-gray-500 bg-gray-900 py-2 px-4 outline-none invalid:border-[#FC8181]"
            type="url"
            onChange={onChange}
            placeholder="https://"
          />
          <div className="flex justify-start space-x-2">
            <input
              id="localhost"
              type="checkbox"
              className=""
              checked={isLocalhost}
              onChange={(e) => {
                setIsLocalhost(e.target.checked);
              }}
            />
            <label htmlFor="localhost">localhost</label>
          </div>
          <p className=" invisible text-[#FC8181] peer-invalid:visible">
            Invalid format.
          </p>
        </div>
        <div className=" flex justify-center">
          <button
            onClick={onCheck}
            type="button"
            className="w-32 rounded-md bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] px-4 py-2"
          >
            Check
          </button>
        </div>
      </form>
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
            ogImage={meta.ogImage}
            hostname={hostname}
            ogTitle={meta.ogTitle}
          />
        </div>
      )}
      {meta && meta.ogImage && (
        <div className="mt-4 hidden flex-col space-y-4 sm:flex">
          <p>Twitter PC Summary</p>
          <TwitterSummaryCard
            ogImage={meta.ogImage}
            hostname={hostname}
            ogTitle={meta.ogTitle}
            ogDescription={meta.ogDescription}
          />
        </div>
      )}
      {meta && meta.ogImage && (
        <div className="mt-4 flex flex-col space-y-4">
          <p>Twitter mobile Summary</p>
          <MobileTwitterSummaryCard
            ogImage={meta.ogImage}
            hostname={hostname}
            ogTitle={meta.ogTitle}
          />
        </div>
      )}
      {toastShown && <Toast />}
    </div>
  );
};
