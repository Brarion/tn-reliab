import React from 'react'

const useResize = () => {
  const [width, setWidth] = React.useState<number | null>(null)

  const handleResize = () => {
    return setWidth(document.documentElement.clientWidth)
  }

  React.useEffect(() => {
    setWidth(document.documentElement.clientWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}

export default useResize
