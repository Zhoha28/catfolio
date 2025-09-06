import React from 'react'
import Image from 'next/image'
type HeroProps = {
  imageSrc?: string;   // optional, may be undefined
  breedname: string;   // required
  summary?: string;    // optional
};
function Hero({imageSrc, breedname, summary} : HeroProps) {
  return (
        <header className="container mx-auto px-6 mt-4">
        <div className="relative overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-black/5">
          <div className="relative aspect-[16/9]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={breedname}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-gray-400">No image</div>
            )}
            {/* Soft gradient overlay for readable text on busy images */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
            <h1 className="text-3xl md:text-4xl font-semibold text-white drop-shadow">
              {breedname}
            </h1>
            {summary && (
              <p className="mt-1 max-w-3xl text-sm md:text-base text-white/90 drop-shadow">
                {summary}
              </p>
            )}
          </div>
        </div>
      </header>
  )
}

export default Hero
