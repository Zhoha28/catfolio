import React from 'react'

function Header() {
  return (
    <>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 -top-24 h-72 bg-gradient-to-b from-fuchsia-100/70 via-sky-100/50 to-transparent blur-2xl" />
          <div className="absolute right-[-10%] top-40 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute left-[-10%] top-72 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 py-12">
          {/* hero */}
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Catpedia <span className="align-[-2px]">🐾</span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              Explore beautiful cat breeds. Click a card to see full details.
            </p>
          </header>
        </div>
        </>
  )
}

export default Header
