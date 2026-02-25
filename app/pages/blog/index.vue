<template>
    <div class="min-h-screen bg-cream">
        <div class="container mx-auto px-4 pt-32 pb-12">
            <header class="mb-12 text-center">
                <h1 class="font-display text-5xl font-bold text-text mb-4">
                    Блог
                </h1>
                <p class="text-textLight text-lg max-w-2xl mx-auto">
                    Заметки, советы и истории о музыке и технологиях
                </p>
            </header>

            <div
                v-if="posts?.length"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <NuxtLink
                    v-for="post in posts"
                    :key="post.id"
                    :to="post.path"
                    class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div class="relative h-48 overflow-hidden">
                        <NuxtImg
                            v-if="post.cover"
                            :src="post.cover"
                            :alt="post.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                            <span
                                v-for="tag in post.tags.slice(0, 3)"
                                :key="tag"
                                class="px-3 py-1 text-xs font-medium bg-blush text-text rounded-full"
                            >
                                {{ tag }}
                            </span>
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
                            <span v-if="post.author">{{ post.author }}</span>
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
                <p class="text-textLight text-lg">
                    Пока нет публикаций. Загляните позже!
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
    queryCollection('blog')
        .order('publishedAt', 'DESC')
        .all(),
)

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
