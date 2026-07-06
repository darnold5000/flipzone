import { GalleryContent } from "@/components/GalleryContent";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Photo Gallery | The Flip Zone Gymnastics",
  description:
    "Browse photos from preschool, recreational, team, camps, birthday parties, and events at The Flip Zone gymnastics facility in Plainfield, Indiana.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryContent />;
}
