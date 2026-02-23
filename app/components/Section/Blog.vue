<template>
    <section
        id="blog"
        class="py-20 md:py-28 bg-gradient-to-b from-white via-milk to-white">
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
                    href="#"
                    class="reveal reveal-delay-2 text-accent font-semibold hover:underline flex items-center gap-2">
                    Смотреть все
                    <Icon
                        name="mdi:arrow-right"
                        class="w-4 h-4" />
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
        excerpt: 'Песенки и упражнения на осеннюю тематику, рабочие листы с заданиями',
        bg: 'bg-gradient-to-br from-rose/30 to-orange/30',
        icon: 'mdi:leaf-maple',
        class: 'reveal',
    },
    {
        title: 'Зимний сборник 2025',
        excerpt: 'Песенки, упражнения, игры на зимнюю тематику',
        bg: 'bg-gradient-to-br from-blue/30 to-white/30',
        icon: 'mdi:snowflake',
        class: 'reveal-delay-1',
    },
    {
        title: 'Смелые шаги в музыкальном развитии',
        excerpt: 'Сборник с рабочими листами и музыкой',
        bg: 'bg-gradient-to-br from-lavender/30 to-sage/30',
        icon: 'mdi:music-circle-outline',
        class: 'reveal-delay-2',
    },
]
</script>
