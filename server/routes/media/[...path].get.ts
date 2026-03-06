import { AwsClient } from 'aws4fetch'

export default eventHandler(async (event) => {
    const pathname = getRouterParam(event, 'path')

    if (!pathname) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not Found',
        })
    }

    const decodedPath = decodeURIComponent(pathname)
    const { s3 } = useRuntimeConfig(event)

    const client = new AwsClient({
        service: 's3',
        accessKeyId: s3.accessKey,
        secretAccessKey: s3.secretAccessKey,
        region: s3.region,
    })

    const url = new URL(`${s3.endpoint}/${s3.bucket}/${decodedPath}`)
    url.searchParams.set('X-Amz-Expires', '3600')
    const signedRequest = await client.sign(
        new Request(url, {
            method: 'GET',
        }),
        {
            aws: {
                signQuery: true,
            },
        },
    )

    return sendRedirect(event, signedRequest.url, 302)
})
