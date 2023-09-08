import * as FEAAS from '@sitecore-feaas/clientside/react'
import dynamic from 'next/dynamic'
// byoc/index lists all BYOC components that will be rendered on clientside
import ExternalComponentBundle from './byoc'
// Following is BYOC components that will be rendered on server side
// Async server component
import './byoc/ExampleServersideComponent'
// Regular react component
import './byoc/ExampleHybridComponent'
// Server with Client inside
import './byoc/ExampleWrapperComponent'
// Component that replaces itself on clientside
import './byoc/ExampleSwappedComponent'
// Place somewhere in top level, e.g. layout of the app
FEAAS.enableNextClientsideComponents(dynamic, ExternalComponentBundle)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body >
      {/*
        Important to include this on the page (preferrably in layout) so
        clientside bundle is properly prepared by Next.
      */}
      <FEAAS.ExternalComponentBundle />
      {children}
      </body>
    </html>
  )
}
