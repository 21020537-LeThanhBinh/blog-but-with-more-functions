export default function Home() {
  return (
    <main className="page-content" aria-label="Content">
      <div className="w">
        <h1>Thanksbinh</h1>

        <ul>
          <li>me</li>
          <ul>
            <li><a href="mailto:lethanhbinh6203@gmail.com">email</a></li>
            <li><a href="https://github.com/lethanksbinh">github</a></li>
            <li>keep in touch: <a href="/newsletter.html">newsletter</a>, <a href="/feed.xml">rss feed</a></li>
          </ul>

          <li>posts</li>
          <ul>
            <li>
              <span>2022-12-08 </span>
              <a href="/chatgpt-honest.html">chatgpt is pretty honest about itself</a>
            </li>
            <li>
              <span>2021-06-13 </span> 
              <a href="/url-trick.html">a trivial, dangerous, false assumption on links</a>
            </li>
            <li>
              <span>2020-10-31 </span>
              <a href="/shame-based-git.html">the shame-based approach to learning git</a>
            </li>
            <li>
              <span>2020-09-18 </span>
              <a href="/stack-overflow-antipattern.html">the stack overflow antipattern</a>
            </li>
            <li>
              <span>2020-07-23 </span>
              <a href="/code-and-memory.html">github arctic vault, code and memory</a>
            </li>
            <li>
              <span>2020-07-21 </span>
              <a href="/intro.html">what this blog is</a>
            </li>
          </ul>
        </ul>
      </div>
    </main>
  )
}
