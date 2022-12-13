import { CSSProperties, useState } from 'react'

interface IImageOnLoad {
  isLoaded: boolean
  handleImageOnLoad: () => void
  thumbStyle: CSSProperties
  fullImageStyle: CSSProperties
}

export const useImageOnLoad = (): IImageOnLoad => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const handleImageOnLoad = () => setIsLoaded(true)

  const thumbStyle: CSSProperties = {
    visibility: isLoaded ? 'hidden' : 'visible',
    filter: 'blur(8px)',
    transition: 'visibility 0ms ease-out 500ms'
  }

  const fullImageStyle: CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 500ms ease-in 0ms'
  }
  return { handleImageOnLoad, thumbStyle, fullImageStyle, isLoaded }
}
