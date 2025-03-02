import { RefObject, useEffect, useRef } from 'react'

type Handler = (event: MouseEvent) => void

/**
 * @param ref ref or refs array of elements that ignores the click event
 * @param handler callback to execute
 */
export function useClickAway(ref: RefObject<HTMLElement> | RefObject<HTMLElement>[], handler: Handler, isActive: boolean = true): void {
  const savedHandler = useRef((event: MouseEvent) => {
    const elements = Array.isArray(ref) ? ref : [ref]

    if (elements.some((el) => el.current && el.current.contains(event.target as Node))) {
      return
    }

    handler(event)
  })

  useEffect(() => {
    const listener: Handler = (event) => {
      if (isActive) {
        savedHandler.current(event)
      }
    }

    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [isActive])
}
