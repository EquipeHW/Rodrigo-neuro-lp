import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Rodrigo Lübke | Neuropsicologia e Neuroavaliação',
  description: 'Site oficial de Rodrigo Lübke, especialista em neuropsicologia, neuroavaliação e reabilitação cognitiva.',
  generator: 'v0.dev',
  keywords: ['neuropsicologia', 'neuroavaliação', 'Rodrigo Lübke', 'reabilitação cognitiva', 'psicologia', 'neurociência'],
  authors: [{ name: 'Rodrigo Lübke' }],
  openGraph: {
    title: 'Rodrigo Lübke | Neuropsicologia e Neuroavaliação',
    description: 'Site oficial de Rodrigo Lübke, especialista em neuropsicologia, neuroavaliação e reabilitação cognitiva.',
    url: 'https://www.seusite.com.br',
    siteName: 'Rodrigo Lübke',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TZBGJRPK');
        `}} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Meta tags extras para SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rodrigo Lübke" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZBGJRPK" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
