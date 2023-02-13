import { useState, useEffect, useRef } from "react"
import TypeWritter from './typeWriter'

const writter = new TypeWritter()

export default function useTypeWritter(str: string, interval?: number) {
  const [word, setWord] = useState<null | string>(null)
  const intervalRef = useRef<any>({})
  const strRef = useRef<any>({})

  useEffect(() => {
    strRef.current = setWord(writter.startTypeWord(str))
  }, [str])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // @ts-ignore
      setWord(writter.typing())
    }, interval ?? writter.rd())
    return function clear() {
      clearInterval(intervalRef.current)
    }
  }, [word])

  return word
}