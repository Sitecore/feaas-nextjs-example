'use client'

// Embed FEAAS Clientside into a client bundle
import * as FEAAS from '@sitecore-feaas/clientside/react'

// Clientside-only component
import './ExampleClientsideComponent'

// Component that can be rendered both on client and server
import './ExampleHybridComponent'

// Component that nested clientside component into server side
import './ExampleSwappedComponent'
// Required: A clientside for BYOC components
// If the component needs access to context, provide it here.
export default (props: any) => FEAAS.ExternalComponent(props)
