<template>
    <div class="min-h-screen bg-cream">
        <div class="container mx-auto px-4 pt-32 pb-12">
            <div class="mb-12 text-center">
                <h1 class="font-display text-5xl font-bold text-text mb-4">
                    Блог
                </h1>
                <p class="text-textLight text-lg max-w-2xl mx-auto">
                    Заметки, советы и истории о музыке
                </p>
            </div>

            <BlogSearchFilter
                v-model:search="search"
                v-model:tags="tags"
                v-model:date="date"
                :all-tags="allTags"
            />

            <div
                v-if="filteredPosts?.length"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <NuxtLink
                    v-for="post in filteredPosts"
                    :key="post.id"
                    :to="post.path"
                    class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div class="relative h-48 overflow-hidden px-6 pt-4">
                        <BaseImage
                            v-if="post.cover"
                            :src="post.cover"
                            :alt="post.title"
                            class="w-full h-full rounded-lg object-cover"
                        />
                        <div
                            v-else
                            class="w-full h-full bg-gradient-to-br from-rose to-lavender flex items-center justify-center"
                        >
                            <span class="text-6xl">🎵</span>
                        </div>
                    </div>

                    <div class="p-6">
                        <div
                            v-if="post.tags?.length"
                            class="flex flex-wrap gap-2 mb-3"
                        >
                            <BaseTag
                                v-for="tagItem in post.tags.slice(0, 3)"
                                :key="tagItem"
                                variant="blush"
                            >
                                {{ tagItem }}
                            </BaseTag>
                        </div>

                        <h2
                            class="font-display text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2"
                        >
                            {{ post.title }}
                        </h2>

                        <p
                            class="text-textLight mb-4 line-clamp-3"
                        >
                            {{ post.description }}
                        </p>

                        <div class="flex items-center justify-between text-sm text-textLight">
                            <time
                                v-if="post.publishedAt"
                                :datetime="post.publishedAt"
                            >
                                {{ formatDate(post.publishedAt) }}
                            </time>
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <div
                v-else
                class="text-center py-16"
            >
                <Icon
                    name="lucide:search-x"
                    class="w-16 h-16 text-textLight/50 mx-auto mb-4"
                />
                <p class="text-textLight text-lg mb-2">
                    Ничего не найдено
                </p>
                <p
                    v-if="hasActiveFilters"
                    class="text-textLight text-sm"
                >
                    Попробуйте изменить параметры поиска или сбросить фильтры
                </p>
                <BaseButton
                    v-if="hasActiveFilters"
                    variant="outline"
                    class="mt-4"
                    @click="clearFilters"
                >
                    Сбросить фильтры
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { search, tags, date, allTags, fetchAllTags, getFilteredPosts, filterPosts, clearFilters, hasActiveFilters } = useBlogFilters()

const { data: posts } = await useAsyncData('blog-posts', () => getFilteredPosts())

await fetchAllTags()

const filteredPosts = computed(() => {
    if (!posts.value) return []
    return filterPosts(posts.value, {
        search: search.value,
        tags: tags.value,
        date: date.value,
    })
})

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

useHead({
    title: 'Блог - Музыкальный педагог Татьяна Ли',
})
</script>
