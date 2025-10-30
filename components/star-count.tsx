'use client'

import { useState, useEffect } from 'react'

export function StarCount() {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/kaizenics/shadcn-cookies')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {
        setStars(0)
      })
  }, [])

  if (stars === null) return null

  return <span>{stars}</span>
}