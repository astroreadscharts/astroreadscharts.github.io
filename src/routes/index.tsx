import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astroreadscharts | Astrology Readings and Guidance" },
      {
        name: "description",
        content:
          "Professional astrology, tarot, numerology and spiritual guidance with a regularly updated astrological journal.",
      },
      {
        property: "og:title",
        content: "Astroreadscharts | Astrology Readings and Guidance",
      },
      {
        property: "og:description",
        content:
          "Professional astrology readings and thoughtful guidance from the Astroreadscharts journal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen overflow-hidden bg-background">
      <iframe
        title="Astroreadscharts website"
        src="/astroreadscharts.html"
        className="h-full w-full border-0"
      />
    </main>
  );
}
