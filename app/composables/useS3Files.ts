export interface useS3FilesOptions {
    path: string
    width?: number
    height?: number
    format?: 'webp' | 'avif' | 'jpg' | 'png'
    quality?: number
    signed?: boolean
}

export function useS3Files() {
    const getUrl = (options: string | useS3FilesOptions): string => {
        const opts = typeof options === 'string'
            ? {
                    path: options,
                }
            : options

        // Handle s3:// protocol
        if (opts.path.startsWith('s3://')) {
            const path = opts.path.replace('s3://', '')
            return `/images/${path}`
        }

        // Handle absolute URLs (external images)
        if (opts.path.startsWith('http://') || opts.path.startsWith('https://')) {
            return opts.path
        }

        // Handle relative paths - assume they're blob paths
        if (opts.path.startsWith('/')) {
            return opts.path
        }

        return `/media/${opts.path}`
    }

    return {
        getUrl,
    }
}
