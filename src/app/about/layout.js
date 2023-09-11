export const metadata = {
  title: 'About',
  description: 'アバウトについてのページ',
  openGraph: {
    title: "About",
    description: "アバウトについてのページ",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  )
}