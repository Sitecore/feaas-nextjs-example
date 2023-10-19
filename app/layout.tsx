import * as FEAAS from "@sitecore-feaas/clientside/react";
import "./byoc";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {/*
        Important to include this on the page (preferrably in layout) so
        clientside bundle is properly prepared by Next.
      */}
        <FEAAS.ExternalComponentBundle />
        {children}
      </body>
    </html>
  );
}
