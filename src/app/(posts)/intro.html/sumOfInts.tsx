'use client'

import { useEffect, useState } from "react"

export default function SumOfInts() {
  const [numb1, setNumb1] = useState(0)
  const [numb2, setNumb2] = useState(0)
  const [ans, setAns] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAns(Math.round(Math.random() * (numb1 + numb2) * 10))
    }, 1000)

    return () => clearInterval(interval)
  }, [numb1, numb2])

  return (
    <>
      <input type="number" name="numb1" id="numb1" value={numb1} onChange={(e) => setNumb1(parseInt(e.target.value) | 0)} />
      +
      <input type="number" name="numb2" id="numb2" value={numb2} onChange={(e) => setNumb2(parseInt(e.target.value) | 0)} />
      =
      {ans}
    </>
  )
}