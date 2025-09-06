import React from 'react'
import Link from 'next/link'

function Breadcrumbs({ breedname }: { breedname: string }) {
  return (
          <div className="container mx-auto px-6 pt-6">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Link href="/" className="hover:underline">Breeds</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{breedname}</span>
        </div>
      </div>
  )
}

export default Breadcrumbs
