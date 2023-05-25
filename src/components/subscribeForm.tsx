'use client'

import Link from "next/link"
import { useState } from "react"

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <>
      <hr data-content="keep in touch"></hr>

      <form
        className="subscribe-form"
        onSubmit={(e) => {
          e.preventDefault()
          setSubscribed(true)
          fetch(`/api/addSubscriber/${email}`, { method: 'POST' })
            .then(() => setSubscribed(false))
            .catch((err) => console.error(err))
          setEmail('')
        }}
      >
        <label htmlFor="tlemail">Newsletter:</label>
        <input type="text" className="w-[140px]" name="email" id="tlemail" placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <span className={subscribed ? '' : 'hide'}>✓</span>
        <br />
        <small>
          No spam, unsubscribe at any time (or use <Link href="#">RSS feed</Link>)
        </small>
      </form>
    </>
  )
}