'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CatFactDisplay() {
  const [fact, setFact] = useState<string>('')

  const fetchFact = async () => {
    const response = await fetch('/api/catfact')
    const data = await response.json()
    setFact(data.fact)
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <>
      <Image
        src="/dubious_cat.svg?height=200&width=200"
        alt="Cartoon Cat"
        width={200}
        height={200}
        className="mb-4"
      />
      <p className="text-2xl mb-4 text-center max-w-md">{fact}</p>
      <button className="lined thick" onClick={fetchFact}>New Fact</button>
    </>
  )
}

