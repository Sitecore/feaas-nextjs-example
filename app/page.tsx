import React from 'react'
import * as FEAAS from '@sitecore-feaas/clientside/react'

// byoc/index lists all BYOC components that will be rendered on clientside
import ClientComponents from './byoc'

// Following is BYOC components that will be rendered on server side
// Async server component
import './byoc/ExampleServersideComponent'
// Regular react component
import './byoc/ExampleHybridComponent'

export default async function ExternalComponents() {
    const template = `<section>
        <h1>Clientside:</h1>
        <feaas-external data-external-id="clientside-only"></feaas-external>
        <h1>Hybrid:</h1>
        <feaas-external data-external-id="hybrid"></feaas-external>
        <h1>Serverside:</h1>
        <feaas-external data-external-id="serverside-only"></feaas-external>
        </section>`

    return (
        <>
            <ClientComponents />
            {/*@ts-ignore*/}
            <FEAAS.ServerComponent template={template} />
        </>
    )
}
