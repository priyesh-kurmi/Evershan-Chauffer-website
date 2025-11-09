import { useState, useEffect, useRef } from 'react'

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchPriority = 'auto',
  onLoad,
  aspectRatio = 'auto'
}) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Preload image
    const img = new Image()
    img.src = src
    
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
      setHasError(false)
      if (onLoad) onLoad()
    }

    img.onerror = () => {
      setHasError(true)
      setIsLoaded(false)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, onLoad])

  if (hasError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <>
      {!isLoaded && (
        <div 
          className={`${className} bg-gray-200 animate-pulse`}
          style={{ aspectRatio: aspectRatio }}
        />
      )}
      {imageSrc && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
        />
      )}
    </>
  )
}
