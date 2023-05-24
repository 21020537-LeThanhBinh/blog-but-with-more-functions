import BackLink from "@/components/backLink"

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="page-content" aria-label="Content">
      <div className="w">
        <BackLink />

        {children}
      </div>
    </main>
  )
}