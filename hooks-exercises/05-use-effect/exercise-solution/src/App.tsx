import { useState, useEffect } from 'react'
import { fetchBio } from './api'

export default function Page() {
  const [person, setPerson] = useState('Alice')
  const [bio, setBio] = useState<string | null>(null)

  useEffect(() => {
    let ignore = false
    console.log({ ignore, person })
    const fetchAndUpdate = async () => {
      const result = await fetchBio(person)
      console.log({ person, result })
      if (!ignore) setBio(result)
    }

    setBio(null)
    fetchAndUpdate()

    return () => {
      console.log('cleanup func set ignore ', true, ' for ', person)
      ignore = true
      console.log({ ignore, person })
    }
  }, [person])

  return (
    <>
      <select
        value={person}
        onChange={e => {
          setPerson(e.target.value)
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  )
}
