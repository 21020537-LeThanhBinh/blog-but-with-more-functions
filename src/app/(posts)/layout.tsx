import BackLink from "@/components/backLink"
import SubscribeForm from "@/components/subscribeForm"

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main aria-label="Content" className="page-content">
      <div className="w">
        <BackLink />

        {children}

        <SubscribeForm />
      </div>
    </main>
  )
}