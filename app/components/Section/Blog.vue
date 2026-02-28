<template>
    <section
        id="blog"
        class="py-20 md:py-24 bg-gradient-to-b from-white via-milk to-white"
    >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center mb-12">
                <div class="text-center md:text-left mb-6 md:mb-0">
                    <BaseTag class="reveal mb-4">
                        Блог
                    </BaseTag>
                    <h2 class="reveal reveal-delay-1 font-display text-3xl md:text-4xl font-semibold text-text">
                        Мои сборники и полезные материалы
                    </h2>
                </div>
                <NuxtLink
                    href="/blog"
                    class="reveal reveal-delay-2 text-accent font-semibold hover:underline flex items-center gap-2"
                >
                    Смотреть все
                    <Icon
                        name="lucide:arrow-right"
                        class="w-4 h-4"
                    />
                </NuxtLink>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <BlogCard
                    v-for="(post) in posts"
                    :key="post.title"
                    v-bind="post"
                    :class="post.class"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const posts = [
    {
        title: 'Осенний сборник 2025',
        excerpt: 'Песенки и упражнения на осеннюю тематику',
        bg: 'bg-gradient-to-br from-rose/30 to-orange-200',
        icon: 'lucide:leaf',
        class: 'reveal-delay-1',
        link: '/blog/osenniy-sbornik-2025',
    },
    {
        title: 'Зимний сборник 2025',
        excerpt: 'Песни, упражнения, игры на зимнюю тематику',
        bg: 'bg-gradient-to-br from-blue-200 to-sky-100',
        icon: 'lucide:snowflake',
        class: 'reveal-delay-2',
        link: '/blog/zimniy-sbornik-2025',
    },
    {
        title: 'Смелые шаги в музыкальном развитии',
        excerpt: 'Сборник с рабочими листами и музыкой',
        bg: 'bg-gradient-to-br from-lavender/30 to-purple-200',
        icon: 'lucide:drum',
        class: 'reveal-delay-3',
        link: '/blog/smelie-shagi-v-muzykalnom-razvitii',
    },
]
</script>
