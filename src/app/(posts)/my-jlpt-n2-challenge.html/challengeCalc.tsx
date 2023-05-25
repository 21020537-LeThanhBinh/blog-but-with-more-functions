'use client'

import { useEffect, useState } from "react"

const levels = new Map([
  ["N1", 10000],
  ["N2", 6000],
  ["N3", 3750],
  ["N4", 1500],
  ["N5", 821],
  ["N6", 0],
])

export default function ChallengeCalc() {
  const [clv, setClv] = useState("")
  const [tlv, setTlv] = useState("")
  const [learnedVocab, setLearnedVocab] = useState(0)
  const [maxLearningVocabPerDay, setMaxLearningVocabPerDay] = useState(0)
  const [minLearningVocabPerDay, setMinLearningVocabPerDay] = useState(0)
  const [testDay, setTestDay] = useState("")
  const [isTooLate, setIsTooLate] = useState(false)

  useEffect(() => {
    if (!levels.has(clv) || !levels.has(tlv)) {
      setMaxLearningVocabPerDay(NaN)
      setMinLearningVocabPerDay(NaN)
      return
    }

    const maxLearningVocab = levels.get(tlv)! - levels.get(clv)! - learnedVocab
    const minLearningVocab = levels.get(tlv)! / 2 + levels.get("N" + (parseInt(tlv[1]) + 1))! / 2 - levels.get(clv)! - learnedVocab

    const remainingDays = Math.ceil((new Date(testDay).getTime() - Date.now()) / (1000 * 60 * 60 * 24)) || 1
    if (remainingDays < 0) setIsTooLate(true)
    else setIsTooLate(false)

    setMaxLearningVocabPerDay(Math.max(Math.ceil(maxLearningVocab / remainingDays), 0))
    setMinLearningVocabPerDay(Math.max(Math.ceil(minLearningVocab / remainingDays), 0))

  }, [clv, tlv, learnedVocab, testDay])

  return (
    <div className="function">
      <label htmlFor="clv"><p>Your current JLPT level:</p></label>
      <input list="lvs" type="text" name="clv" id="clv" value={clv} onChange={(e) => setClv(e.target.value.toLocaleUpperCase())} placeholder="N?" />

      <label htmlFor="tlv"><p>Your target JLPT level:</p></label>
      <input list="lvs" type="text" name="tlv" id="tlv" value={tlv} onChange={(e) => setTlv(e.target.value.toLocaleUpperCase())} placeholder="N?" />

      <datalist id="lvs">
        <option value="N1" />
        <option value="N2" />
        <option value="N3" />
        <option value="N4" />
        <option value="N5" />
        <option value="N6" />
      </datalist>

      <label htmlFor="learnedVocab"><p>How many JLPT vocabulary above {clv || "N6"} did you learned:</p></label>
      <input type="number" name="learnedVocab" id="learnedVocab" value={learnedVocab} onChange={(e) => setLearnedVocab(parseInt(e.target.value))} />

      <label htmlFor="testDay"><p>Your JLPT test day:</p></label>
      <input type="date" name="testDay" id="testDay" value={testDay} onChange={(e) => setTestDay(e.target.value)} />

      {isNaN(minLearningVocabPerDay) || isNaN(maxLearningVocabPerDay) || !testDay ? (
        <p></p>
      ) : !minLearningVocabPerDay && !maxLearningVocabPerDay ? (
        <p>You don&apos;t need to learn more vocabulary. Just focus on reading, listening.</p>
      ) : isTooLate ? (
        <p>It&apos;s too late!</p>
      ) : (
        <p>You might want to learn <b>{minLearningVocabPerDay}</b> to <b>{maxLearningVocabPerDay}</b> new words per day starting from today! Also, focus on reading, listening.</p>
      )}
    </div>
  )
}