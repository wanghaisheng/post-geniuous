import { AppFrame, Spinner } from '@/components'
import { useEffect, useState } from 'react'
import { PreviewArea } from '@/containers'
import { useRouter } from 'next/router'

export default function Index () {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!window.location.search) {
      router.replace('/editor')
    } else {
      setIsLoading(false)
    }
  }, [router])

  return (
    <AppFrame>
      {isLoading ? <Spinner /> : <PreviewArea isEditor={false} />}
    </AppFrame>
  )
}
