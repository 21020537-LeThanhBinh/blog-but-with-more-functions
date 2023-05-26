'use client'

import { useEffect, useRef, useState } from "react"
import { event } from "@/lib/ga"

export default function SumOfInts() {
  const [numb1, setNumb1] = useState(0)
  const [numb2, setNumb2] = useState(0)
  const [ans, setAns] = useState(0)
  const functionUsed = useRef<boolean>(false)

  useEffect(() => {
    (numb1 + numb2) && onUseFunction()

    const interval = setInterval(() => {
      setAns(Math.round(Math.random() * (numb1 + numb2) * 10))
    }, 1000)

    return () => clearInterval(interval)
  }, [numb1, numb2])

  function onUseFunction() {
    if (functionUsed.current) return
    
    functionUsed.current = true
    event({ action: 'click', params: { function_name: "SumOfInts" } })
  }

  return (
    <div className="function">
      <p></p>
      <input type="number" name="numb1" id="numb1" aria-label="first number" value={numb1} onChange={(e) => setNumb1(parseInt(e.target.value) | 0)} />
      +
      <input type="number" name="numb2" id="numb2" aria-label="second number" value={numb2} onChange={(e) => setNumb2(parseInt(e.target.value) | 0)} />
      ={ans}
      <p></p>
    </div>
  )
}