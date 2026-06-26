import { useMemo } from "react";
import { IconCloud } from "@ui/icon-cloud";
import { SLUGS } from "@constants";


export default function StackCloud () {
  const images = useMemo(
    () => SLUGS.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`),
    []
  )

  return (
    <IconCloud images={images} />
  );
}