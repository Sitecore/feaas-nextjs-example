import * as FEAAS from '@sitecore-feaas/clientside/react'

export default async function ExternalComponents({
    searchParams
}: {
    searchParams: { feaasSrc: string; data: string }
}) {
    const src = searchParams.feaasSrc
    const data = searchParams.data ? JSON.parse(searchParams.data) : {}
    return (
        <FEAAS.ServerComponent src={src} data={data} />
    )
}
