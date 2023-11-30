'use client'
 
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Documents from './../Documents';




const Page = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('search')

  return (
    <div>
    <h1>Search Results</h1>
    <p>You searched for: {q}</p>
    {/* Add your content based on the search query here */}
    <Documents />
    </div>
  )
}

export default Page