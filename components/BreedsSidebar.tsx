import React from 'react'
import Link from 'next/link'
type BreedsSidebarProps = {
  origin?: string;
  size?: string;
  grooming?: number;
  lifespan?: number;
  weight?: string;
};
function BreedsSidebar({ origin, size, grooming, lifespan, weight }: BreedsSidebarProps) {
  return (
          <aside className="lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200 shadow-sm">
              <h3 className="text-base font-semibold">At a glance</h3>
              <dl className="mt-4 grid grid-cols-1 gap-3 text-sm">
                {origin && (
                  <div>
                    <dt className="text-gray-500">Origin</dt>
                    <dd className="font-medium text-gray-900">{origin}</dd>
                  </div>
                )}
                {size && (
                  <div>
                    <dt className="text-gray-500">Size</dt>
                    <dd className="font-medium text-gray-900">{size}</dd>
                  </div>
                )}
                {Number.isInteger(grooming) && (
                  <div>
                    <dt className="text-gray-500">Grooming</dt>
                    <dd className="font-medium text-gray-900">
                      {grooming}/5
                    </dd>
                  </div>
                )}
                {Number.isInteger(lifespan) && (
                  <div>
                    <dt className="text-gray-500">Lifespan</dt>
                    <dd className="font-medium text-gray-900">
                      {lifespan} years
                    </dd>
                  </div>
                )}
                {weight && (
                  <div>
                    <dt className="text-gray-500">Weight</dt>
                    <dd className="font-medium text-gray-900">
                      {weight}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-5">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  ← Back to breeds
                </Link>
              </div>
            </div>
          </aside>
  )
}

export default BreedsSidebar
