<template>
    <article
        v-if="post"
        class="min-h-screen bg-cream"
    >
        <!-- Cover Image -->
        <div class="relative h-[60vh] w-full overflow-hidden">
            <BaseImage
                v-if="post.cover"
                :src="post.cover"
                :alt="post.title"
                class="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div class="container mx-auto">
                    <div
                        v-if="post.tags?.length"
                        class="flex flex-wrap gap-2 mb-4"
                    >
                        <BaseTag
                            v-for="tag in post.tags"
                            :key="tag"
                            variant="white"
                        >
                            {{ tag }}
                        </BaseTag>
                    </div>
                    <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                        {{ post.title }}
                    </h1>
                    <div class="flex items-center gap-4 text-white/90">
                        <time
                            v-if="post.publishedAt"
                            :datetime="post.publishedAt"
                        >
                            {{ formatDate(post.publishedAt) }}
                        </time>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="container mx-auto px-4 py-12">
            <div class="max-w-3xl mx-auto">
                <ContentRenderer
                    v-if="post.body"
                    :value="post"
                    class="prose prose-lg max-w-none"
                />

                <!-- Back to Blog -->
                <div class="mt-16 pt-8 border-t border-blush">
                    <NuxtLink
                        to="/blog"
                        class="inline-flex items-center gap-2 text-accent hover:text-text transition-colors duration-300 font-medium"
                    >
                        <span class="text-2xl">←</span>
                        Назад к блогу
                    </NuxtLink>
                </div>
            </div>
        </div>
    </article>

    <div
        v-else
        class="min-h-screen bg-cream flex items-center justify-center"
    >
        <p class="text-textLight text-lg">
            Пост не найден
        </p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
    queryCollection('blog')
        .path(`/blog/${slug}`)
        .first(),
)

if (!post.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Post not found',
    })
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

useSeoMeta({
    title: post.value.seo?.title || post.value.title,
    description: post.value.seo?.description || post.value.description,
})

useHead({
    meta: [
        {
            name: 'og:title',
            content: post.value.seo?.title || post.value.title,
        },
        {
            name: 'og:description',
            content: post.value.seo?.description || post.value.description,
        },
        {
            name: 'og:image',
            content: post.value.cover ? new URL(post.value.cover, 'https://musicali.ru').href : undefined,
        },
        {
            name: 'og:type',
            content: 'article',
        },
        {
            name: 'article:published_time',
            content: post.value.publishedAt,
        },
        {
            name: 'article:tag',
            content: post.value.tags?.join(', '),
        },
    ],
})
</script>
