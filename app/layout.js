export const metadata = {
  title: 'Little Ones SG',
  description: 'Free resource library for parents of children ages 0-6 in Singapore. Browse curated learning resources, enrichment centres, playgrounds and more.',
  manifest: '/manifest.json',
  themeColor: '#2D8B7D',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Little Ones SG',
  },
  openGraph: {
    title: 'Little Ones SG',
    description: 'Curated learning resources for Singapore parents of children 0–6',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#FBF8F4' }}>
        {children}
      </body>
    </html>
  );
}
