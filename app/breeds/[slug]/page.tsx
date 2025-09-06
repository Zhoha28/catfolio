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

type RouteParams = { slug: string };

export async function generateStaticParams() {
  const { items } = await cda.getEntries({
    content_type: "catBreeds",
    limit: 1000,
  });
  return items.map((i: any) => ({ slug: i.fields.slug }));
}

export default async function BreedPage({
  params,
}: {
  params: Promise<RouteParams>; // 👈 accept Promise
}) {
  const { slug } = await params; // 👈 await it

  const { items } = await cda.getEntries({
    content_type: "catBreeds",
    "fields.slug": slug, // 👈 use the awaited slug
    include: 2,
    limit: 1,
  });

  const breed = items[0];
  if (!breed) return notFound();

  const f = breed.fields;
  const file = f.heroImage?.fields?.file;
  const heroSrc = file?.url ? `https:${file.url}` : undefined;

  const gallery: string[] = Array.isArray(f.imageGallery)
    ? f.imageGallery
        .map((a: any) => a?.fields?.file?.url && `https:${a.fields.file.url}`)
        .filter(Boolean)
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
              temperament={f.temperamentTags} // 👈 fix prop name
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