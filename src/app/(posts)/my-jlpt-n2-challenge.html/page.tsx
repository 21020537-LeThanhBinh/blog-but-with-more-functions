import ChallengeCalc from "./challengeCalc";

export const metadata = {
  title: 'My JLPT N2 challenge',
  description: 'My experience of getting JLPT N2 in ... months.',
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

      <ChallengeCalc />

      <p>Updating ...</p>

    </article>
  )
}