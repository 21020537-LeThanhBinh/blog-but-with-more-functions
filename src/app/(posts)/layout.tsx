import SubscribeForm from "@/components/subscribeForm"
import Link from "next/link"

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main aria-label="Content" className="page-content">
      <div className="w">
        <Link href="/">..</Link>

        {children}

        <SubscribeForm />
      </div>
    </main>
  )
}