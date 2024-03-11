import { useCallback, useEffect, useRef, useState } from 'react'
import '../../styles/InfLoop.css'

type Props = {
  speed: number
  direction?: string
  children: React.ReactNode
  className?: string
}

const InfiniteLoop = ({ children, speed, direction, className }: Props) => {
  const [looperInstances, setLooperInstances] = useState(1)
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false')

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true')
        }
      }, 50)
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return

    const { width } = innerRef.current.getBoundingClientRect()

    const { width: parentWidth } = outerRef.current.getBoundingClientRect()

    const instanceWidth = width / innerRef.current.children.length

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width))
    }

    resetAnimation()
  }, [looperInstances])

  useEffect(() => {
    window.addEventListener('resize', setupInstances)
    setupInstances()

    return () => {
      window.removeEventListener('resize', setupInstances)
    }
  }, [setupInstances])

  return (
    <div className={`looper ${className}`} ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
export default InfiniteLoop
