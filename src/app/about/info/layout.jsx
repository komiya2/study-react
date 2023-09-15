export const metadata = {
  title: 'Info',
  description: 'infoについてのページ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  )
}

