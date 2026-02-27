export interface BlogPost {
    id: string
    path: string
    title: string
    description: string
    cover?: string
    coverAlt?: string
    publishedAt: string
    tags?: string[]
}

export interface UseBlogFiltersOptions {
    search?: string
    tags?: string[]
    date?: string
}

export function useBlogFilters() {
    const route = useRoute()
    const router = useRouter()

    const getInitialSearch = () => (route.query.search as string) || ''
    const getInitialTags = () => {
        const tagsQuery = route.query.tags
        if (!tagsQuery) return []
        return Array.isArray(tagsQuery) ? tagsQuery.map(tag => tag as string) : [tagsQuery]
    }
    const getInitialDate = () => (route.query.date as string) || ''

    const search = ref(getInitialSearch())
    const tags = ref<string[]>(getInitialTags())
    const date = ref(getInitialDate())

    const allTags = ref<string[]>([])

    const syncToQuery = () => {
        const query: Record<string, string | string[] | undefined> = {
        }

        if (search.value) {
            query.search = search.value
        }
        if (tags.value.length > 0) {
            query.tags = tags.value
        }
        if (date.value) {
            query.date = date.value
        }

        router.push({
            query,
        })
    }

    watch(
        [() => search.value, () => tags.value, () => date.value],
        () => {
            syncToQuery()
        },
        {
            deep: true,
            flush: 'post',
        },
    )

    const fetchAllTags = async () => {
        const { data } = await useAsyncData('blog-tags', async () => {
            const posts = await queryCollection('blog').all()
            const tags = new Set<string>()
            posts.forEach((post) => {
                if (post.tags) {
                    post.tags.forEach((t: string) => tags.add(t))
                }
            })
            return Array.from(tags).sort()
        })
        allTags.value = data.value || []
    }

    const getFilteredPosts = async () => {
        return await queryCollection('blog')
            .order('publishedAt', 'DESC')
            .all()
    }

    const filterPosts = (posts: BlogPost[], options: UseBlogFiltersOptions): BlogPost[] => {
        let filtered = [...posts]

        if (options.search) {
            const searchLower = options.search.toLowerCase()
            filtered = filtered.filter((post) => {
                const titleMatch = post.title.toLowerCase().includes(searchLower)
                const descMatch = post.description.toLowerCase().includes(searchLower)
                return titleMatch || descMatch
            })
        }

        if (options.tags && options.tags.length > 0) {
            filtered = filtered.filter((post) => {
                return options.tags!.some(tag => post.tags?.includes(tag))
            })
        }

        if (options.date) {
            const now = new Date()
            let cutoffDate: Date

            switch (options.date) {
                case 'week':
                    cutoffDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
                    break
                case 'month':
                    cutoffDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
                    break
                case 'year':
                    cutoffDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)
                    break
                default:
                    return filtered
            }

            filtered = filtered.filter((post) => {
                const postDate = new Date(post.publishedAt)
                return postDate >= cutoffDate
            })
        }

        return filtered
    }

    const clearFilters = () => {
        search.value = ''
        tags.value = []
        date.value = ''
    }

    const hasActiveFilters = computed(() => {
        return search.value || tags.value.length > 0 || date.value
    })

    return {
        search,
        tags,
        date,
        allTags,
        fetchAllTags,
        getFilteredPosts,
        filterPosts,
        clearFilters,
        hasActiveFilters,
    }
}
