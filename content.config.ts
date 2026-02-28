import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                cover: z.string().optional(),
                coverAlt: z.string().optional(),
                publishedAt: z.string(),
                tags: z.array(z.string()).optional(),
            }),
        }),
        private: defineCollection({
            type: 'page',
            source: 'private/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                cover: z.string().optional(),
                coverAlt: z.string().optional(),
                publishedAt: z.string(),
                tags: z.array(z.string()).optional(),
            }),
        }),
    },
})
