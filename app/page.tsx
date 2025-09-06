export const revalidate = 60;

import Image from 'next/image';
import Link from 'next/link';
import { cda } from '@/lib/contentful';

type Entry = any;

const toHttps = (u?: string) => (u?.startsWith('http') ? u : u ? `https:${u}` : undefined);
// Optional: light transform for faster thumbnails
const imgUrl = (u?: string, w = 800) => (u ? `${toHttps(u)}?w=${w}&q=80&fm=webp` : undefined);

export default async function Home() {
  const { items } = await cda.getEntries({
    content_type: 'catBreeds',
    include: 1,
  });

  return (
    <main className="relative min-h-dvh overflow-hidden">
  
      <div className="container mx-auto px-6 py-12">
        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((b: Entry) => {
            const f = b.fields;
            const file = f.heroImage?.fields?.file;
            const src = imgUrl(file?.url, 900); // crisp card image

            return (
              <Link
                key={b.sys.id}
                href={`/breeds/${f.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition
                           hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/10"
              >
                {/* image */}
                <figure className="relative aspect-[4/3]">
                  {src ? (
                    <Image
                      src={src}
                      alt={f.name || 'Cat'}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      priority={false}
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-100" />
                  )}
                  {/* soft overlay + name */}
                  <div className="pointer-events-none absolute inset-0 rounded-b-2xl bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90" />
                  <figcaption className="absolute bottom-3 left-3 right-3">
                    <h2 className="truncate text-lg font-medium text-white drop-shadow">
                      {f.name}
                    </h2>
                  </figcaption>
                  {/* subtle ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                </figure>

                {/* meta row */}
                <div className="p-3 pt-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {f.size && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                        Size: {f.size}
                      </span>
                    )}
                    {Number.isInteger(f.groomingLevel) && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                        Grooming: {f.groomingLevel}/5
                      </span>
                    )}
                    {f.origin && (
                      <span className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-[11px] text-gray-600 ring-1 ring-inset ring-gray-200">
                        {f.origin}
                      </span>
                    )}
                  </div>

                  {/* tiny blurb (1 line) */}
                  {f.briefSummary && (
                    <p className="mt-2 line-clamp-1 text-sm text-gray-600">
                      {f.briefSummary}
                    </p>
                  )}
                </div>

                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-black/10" />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
2