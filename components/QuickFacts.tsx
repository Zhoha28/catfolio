import React from 'react'

function QuickFacts({origin, size, grooming, lifespan, weight, temparment, colorsPatterns}) {
  return (
           <section aria-labelledby="facts" className="mb-8">
                 <h2 id="facts" className="sr-only">
                   Quick facts
                 </h2>
                 <div className="flex flex-wrap gap-2">
                   {origin && (
                     <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                       Origin: {origin}
                     </span>
                   )}
                   {size && (
                     <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                       Size: {size}
                     </span>
                   )}
                   {Number.isInteger(grooming) && (
                     <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                       Grooming: {grooming}/5
                     </span>
                   )}
                   {Number.isInteger(lifespan) && (
                     <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                       Lifespan: {lifespan} yrs
                     </span>
                   )}
                   {weight && (
                     <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                       Weight: {weight}
                     </span>
                   )}
                   {temparment?.length > 0 && (
                     <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                       Temperament: {temparment.join(", ")}
                     </span>
                   )}
                   {colorsPatterns && (
                     <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                       Colors: {colorsPatterns}
                     </span>
                   )}
                 </div>
               </section>
  )
}

export default QuickFacts
