import React from 'react'
import * as FEAAS from '@sitecore-feaas/clientside/react'
import style from './page.module.css'
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

export default async function ExternalComponents({
                                                     searchParams
                                                 }: {
    searchParams: { feaasSrc: string; data: string }
}) {
    const src = searchParams.feaasSrc
    const data = searchParams.data ? JSON.parse(searchParams.data) : {}
    return (
        <div className={style.page}>
            {/*
        Important to include this on the page (preferrably in layout) so
        clientside bundle is properly prepared by Next.
      */}
            <FEAAS.ExternalComponentBundle />
            <FEAAS.External.Preview src={src} data={data}></FEAAS.External.Preview>
        </div>
    )
}
