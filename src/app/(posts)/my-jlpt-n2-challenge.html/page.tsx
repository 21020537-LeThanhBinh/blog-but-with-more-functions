import Link from "next/link";
import ChallengeCalc from "./challengeCalc";
import { Suspense } from "react";

export const metadata = {
  title: "My JLPT N2 challenge",
  description: "My experience of getting JLPT N2 in ... months.",
}

export default function Intro() {
  return (
    <article>
      <p className="post-meta">
        <time dateTime="2023-05-25 00:00:00 +0000">2023-05-25</time>
      </p>

      <h1>My experience of getting JLPT N2 in ... months</h1>
      <p>I didn&apos;t want to clickbait my self so the number of months I learned Japanese before passing JLPT N2 is hidden.</p>

      <p>Before that, do you think you can pass JLPT N? in ?months ?</p>
      <Suspense fallback={<p>Loading ChallengeCalc...</p>}>
        <ChallengeCalc />
      </Suspense>

      <h2 id="index-">Index</h2>

      <ul>
        <li><a href="#tools&resources">Tools and Resources</a></li>
        <li><a href="#inspiration">Inspiration</a></li>
        <li><a href="#aspiration">Aspiration</a></li>
        <li><a href="#guild">Guild</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <h2 id="tools&resources">Tools and Resources</h2>

      <p>Tools I used, ranked by frequency:</p>
      <ol>
        <li><Link href="https://mpv.io/">mpv</Link>: media player for watching anime</li>
        <li><Link href="https://apps.ankiweb.net/">Anki</Link>: for memorizing vocabulary</li>
        <li><Link href="https://chrome.google.com/webstore/detail/yomichan/ogmnaimimemjmbakcfefmnahgdfhfami">Yomichan</Link>: for looking up new words and make Anki cards</li>
        <li><Link href="https://docs.google.com/spreadsheets/u/0/">Google Sheets</Link>: for recording progress</li>
      </ol>

      <p>Resources I know, ranked by usefulness (opinion):</p>
      <ol>
        <li><Link href="https://myanimelist.net/profile/B_I_N_H">Anime</Link>: whenever I watch anime, I feel like a part of it, which make anime perfect for immersion</li>
        <li><Link href="https://www.youtube.com/@mattvsjapan">Matt vs Japan</Link>: for useful learning tips, he also has a more structured guild in <Link href="https://refold.la/">refold.la</Link></li>
        <li><Link href="https://tatsumoto.neocities.org/blog/table-of-contents">Tatsumoto</Link>: more detailed than Matt vs Japan&apos;s guild, try this if you&apos;re really serious</li>
        <li>A person you can contact who know more Japanese than you: they might share something unique in their learning</li>
        <li>Manga, light novels, visual novels, news: better than anime in improving reading skill</li>
        <li>Youtube, podcast: sometime it&apos;s better to listen to real-life japanese</li>
        <li><Link href="https://kitsunekko.net/dirlist.php?dir=subtitles%2Fjapanese%2F">kitsunekko.net</Link>: for downloading japanese subtitles</li>
        <li><Link href="https://jpdb.io/anime-difficulty-list">jpdb.io</Link>: for anime difficulty list, only useful for beginners</li>
        <li>Japanese ASMR, music: these&apos;re just for relaxation, but I sometime do learn new words from music</li>
      </ol>

      <p>Tools or Resources that I only use once are not listed.</p>
      <p>I say this because you might better find something that suit yourself, learning should be fun for everyone.</p>

      <h2 id="inspiration">Inspiration</h2>

      <p>Updating ...</p>

      <h2 id="aspiration">Aspiration</h2>

      <p>Updating ...</p>

      <h2 id="guild">Guild</h2>

      <p>Updating ...</p>

      <h2 id="faq">FAQ</h2>

      <p>Updating ...</p>

    </article>
  )
}