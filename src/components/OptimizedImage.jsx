import { useState, useEffect } from 'react'

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchPriority = 'auto',
  onLoad
}) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload image
    const img = new Image()
    img.src = src
    
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
      if (onLoad) onLoad()
    }

    return () => {
      img.onload = null
    }
  }, [src, onLoad])

  return (
    <>
      {!isLoaded && (
        <div className={`${className} bg-gray-200 animate-pulse`} />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
        />
      )}
    </>
  )
}
