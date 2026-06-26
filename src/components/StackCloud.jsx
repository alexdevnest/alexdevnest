import { IconCloud } from "@ui/icon-cloud";
import { SLUGS } from "@constants";


export default function StackCloud () {
  const images = SLUGS.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <IconCloud images={images} />
  );
}