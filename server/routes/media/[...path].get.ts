import { eventHandler, getRouterParam, createError } from 'h3'
import { blob } from 'hub:blob'

export default eventHandler(async (event) => {
    const pathname = getRouterParam(event, 'path')

    if (!pathname) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not Found',
        })
    }

    const decodedPath = decodeURIComponent(pathname)

    return blob.serve(event, decodedPath)
})
