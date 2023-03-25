import type { MetaFieldType } from "@/types/meta-field";

export const metaFieldParser = (htmlString: string): MetaFieldType => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, "text/html");

  const title = dom.querySelector("title")?.text ?? "";
  const description =
    dom.querySelector('meta[name="description"]')?.getAttribute("content") ??
    "";
  const ogUrl =
    dom.querySelector('meta[property="og:url"]')?.getAttribute("content") ?? "";
  const ogType =
    dom.querySelector('meta[property="og:type"]')?.getAttribute("content") ??
    "";
  const ogTitle =
    dom.querySelector('meta[property="og:title"]')?.getAttribute("content") ??
    "";
  const ogDescription =
    dom
      .querySelector('meta[property="og:description"]')
      ?.getAttribute("content") ?? "";
  const ogImage =
    dom.querySelector('meta[property="og:image"]')?.getAttribute("content") ??
    "";
  const ogSiteName =
    dom
      .querySelector('meta[property="og:site_name"]')
      ?.getAttribute("content") ?? "";
  const twitterCard =
    dom
      .querySelector('meta[property="twitter:card"]')
      ?.getAttribute("content") ?? "";
  const twitterSite =
    dom
      .querySelector('meta[property="twitter:site"]')
      ?.getAttribute("content") ?? "";

  return {
    title,
    description,
    ogUrl,
    ogType,
    ogTitle,
    ogDescription,
    ogSiteName,
    twitterCard,
    twitterSite,
    ogImage,
  };
};
