'use client'

export default function SubscribeForm() {
  return (
    <>
      <hr data-content="keep in touch"></hr>

      <form className="subscribe-form" action="https://tinyletter.com/riggraz" method="post" target="popupwindow"
        onSubmit={() => {
          window.open('https://tinyletter.com/riggraz', 'popupwindow', 'scrollbars=yes,width=800,height=600')
          return true
        }}
      >
        <label htmlFor="tlemail">Newsletter:</label>
        <input type="text" className="w-[140px]" name="email" id="tlemail" placeholder="your email" />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <br />
        <small>
          No spam, unsubscribe at any time (or use <a href="/feed.xml">RSS feed</a>)
        </small>
      </form>
    </>
  )
}