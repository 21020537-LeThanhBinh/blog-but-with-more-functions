import './globals.scss'

export const metadata = {
  title: 'Thanksbinh',
  description: 'Talentless artist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark">{children}</body>
    </html>
  )
}
