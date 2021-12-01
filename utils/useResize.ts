import React from 'react'

const useResize = () => {
  const [width, setWidth] = React.useState<number>(1920)

  const handleResize = () => {
    return setWidth(window.outerWidth)
  }

  React.useEffect(() => {
    setWidth(window.outerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}

export default useResize
