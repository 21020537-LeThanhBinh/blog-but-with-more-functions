'use client'

import Link from "next/link"

export default function SubscribeForm() {
  return (
    <>
      <hr data-content="keep in touch"></hr>

      <form className="subscribe-form" action="" method="post" target="popupwindow"
        onSubmit={(e) => {
          e.preventDefault()
          alert("Updating ...")
        }}
      >
        <label htmlFor="tlemail">Newsletter:</label>
        <input type="text" className="w-[140px]" name="email" id="tlemail" placeholder="your email" />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <br />
        <small>
          No spam, unsubscribe at any time (or use <Link href="/feed.xml">RSS feed</Link>)
        </small>
      </form>
    </>
  )
}