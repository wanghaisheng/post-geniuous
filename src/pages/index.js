import { AppFrame, Spinner } from '@/components'
import { useEffect, useState } from 'react'
import { PreviewArea } from '@/containers'
import { useRouter } from 'next/router'

export default function Index () {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (!window.location.search) {
      router.replace('/editor')
    } else {
      setIsLoading(false)
    }
  }, [router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`/api/get-title?url=${encodeURIComponent(url)}`)
      const data = await response.json()
      
      if (data.title) {
        const currentQuery = new URLSearchParams(window.location.search)
        currentQuery.set('title', data.title)
        router.push(`${window.location.pathname}?${currentQuery.toString()}`)
      }
    } catch (error) {
      console.error('Error fetching title:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AppFrame>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <PreviewArea isEditor={false} />
        </>
      )}
    </AppFrame>
  )
}