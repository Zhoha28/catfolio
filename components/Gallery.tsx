import React from 'react'
import Image from "next/image";
function Gallery({gallery, name}) {
  return (
    <>
      {gallery.length > 0 && (
                 <section aria-labelledby="gallery" className="mt-10">
                   <h2 id="gallery" className="text-xl font-semibold mb-4">
                     Gallery
                   </h2>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                     {gallery.map((src) => (
                       <div
                         key={src}
                         className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 ring-1 ring-black/5"
                       >
                         <Image
                           src={src}
                           alt={`${name} photo`}
                           fill
                           className="object-cover"
                         />
                       </div>
                     ))}
                   </div>
                 </section>
               )}
               </>
  )
}

export default Gallery
