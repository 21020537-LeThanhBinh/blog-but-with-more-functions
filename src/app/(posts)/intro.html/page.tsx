import { Suspense } from "react";
import SumOfInts from "./sumOfInts";

export const metadata = {
  title: 'What This Blog Is',
  description: 'What This Blog Is.',
}

export default function Intro() {
  return (
    <article>
      <p className="post-meta">
        <time dateTime="2023-05-24 00:00:00 +0000">2023-05-24</time>
      </p>

      <h1>What This Blog Is</h1>
      <p>Hi, it&apos;s Binh and welcome to my blog.</p>
      <p>With this, I&apos;ll try my best to share everything I know about the world in short posts and mini functions. Like this:</p>

      <p>What&apos;s the sum of two numbers?</p>
      <Suspense fallback={<p>Loading SumOfInts...</p>}>
        <SumOfInts />
      </Suspense>
      
      <p>.</p>
      <p>.</p>
      <p>.</p>

      <p>Did you think the answer&apos;s wrong? Well, let me explain.</p>

      <p>In the question above, I write &quot;sum of two numbers&quot;, but I didn&apos;t specify numbers of what?</p>

      <p>In terms of mathematics, &quot;1 plus 1 is 2&quot;, which might transfer to &quot;I have 1 apple, someone give me an another one, so I must have 2 apples&quot;.</p>

      <p>Sounds right, but it&apos;s a simplifying way to think about the world and I think it&apos;s perfectly normal to teach children like this, however, it&apos;s actually much more complicated.</p>

      <p>If I have an apple and someone give me an another one, I might just eat one, or sell it, or make apple juice, ... Even if I don&apos;t do anything, the apples might just get deformed over a period of time.</p>

      <p>So, the answer is really depends on what objects are we counting, how&apos;s the environment effecting them and over how long?</p>

      <p>...Yeah, this isn&apos;t gonna be useful though.</p>

      <p>If you&apos;re asking which audience I&apos;m targeting, I&apos;d just say myself (in the past or future) because I don&apos;t think anyone would benefit from all of my posts.</p>

      <p>With that said, if you&apos;re not me and wanting to explore any post I made, feel free to do so.</p>

    </article>
  )
}