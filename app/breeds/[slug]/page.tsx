export const revalidate = 60;

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cda } from "@/lib/contentful";
import RichTextRenderer from "@/components/RichTextRenderer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import QuickFacts from "@/components/QuickFacts";
import BreedsSidebar from "@/components/BreedsSidebar";
import Gallery from "@/components/Gallery";

// ---------- helpers ----------
type AssetLike = { fields?: { file?: { url?: string } } };

const isAssetLike = (x: unknown): x is AssetLike =>
  !!(x && typeof x === "object" && (x as AssetLike).fields?.file?.url);

const getAssetUrl = (x: unknown): string | undefined => {
  if (!isAssetLike(x)) return undefined;
  const url = x.fields!.file!.url!;
  return url.startsWith("http") ? url : `https:${url}`;
};

type CatBreedFields = {
  name: string;
  slug: string;
  heroImage?: unknown;
  imageGallery?: unknown[];
  origin?: string;
  temperamentTags?: string[];
  size?: "Small" | "Medium" | "Large" | string;
  groomingLevel?: number;
  lifespan?: number;
  weightRange?: string;
  colorsPatterns?: string;
  briefSummary?: string;
  aboutBody?: any;
};

// Narrow the Contentful entry at runtime (no unsafe cast)
function isCatBreedEntry(x: unknown): x is { fields: CatBreedFields } {
  const f = (x as any)?.fields;
  return (
    !!f &&
    typeof f.name === "string" &&
    typeof f.slug === "string"
  );
}

type RouteParams = { slug: string };

export async function generateStaticParams() {
  const { items } = await cda.getEntries({
    content_type: "catBreeds",
    limit: 1000,
  });
  return items
    .map((i: any) => i?.fields?.slug)
    .filter(Boolean)
    .map((slug: string) => ({ slug }));
}

export default async function BreedPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;

  const { items } = await cda.getEntries({
    content_type: "catBreeds",
    "fields.slug": slug,
    include: 2,
    limit: 1,
  });

  const entry = items[0] as unknown;           // <-- keep as unknown
  if (!isCatBreedEntry(entry)) return notFound();

  const f = entry.fields;                       // <-- now typed as CatBreedFields

  const heroSrc = getAssetUrl(f.heroImage);

  const gallery: string[] = Array.isArray(f.imageGallery)
    ? f.imageGallery.map(getAssetUrl).filter((u): u is string => Boolean(u))
    : [];

  return (
    <article className="min-h-dvh bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs breedname={f.name} />
      <Hero imageSrc={heroSrc} breedname={f.name} summary={f.briefSummary} />

      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <QuickFacts
              origin={f.origin}
              size={f.size}
              grooming={f.groomingLevel}
              lifespan={f.lifespan}
              weight={f.weightRange}
              temperament={f.temperamentTags}
              colorsPatterns={f.colorsPatterns}
            />

            {f.aboutBody && (
              <section aria-labelledby="about">
                <h2 id="about" className="text-xl font-semibold mb-3">
                  About
                </h2>
                <RichTextRenderer doc={f.aboutBody} />
              </section>
            )}

            <Gallery gallery={gallery} name={f.name} />
          </div>

          <BreedsSidebar
            origin={f.origin}
            lifespan={f.lifespan}
            weight={f.weightRange}
            grooming={f.groomingLevel}
            size={f.size}
          />
        </div>
      </div>
    </article>
  );
}