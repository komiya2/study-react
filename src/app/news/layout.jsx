export const metadata = {
  title: 'ニュース',
  description: 'ニュースについてのページ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  )
}