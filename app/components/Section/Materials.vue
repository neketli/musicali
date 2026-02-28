<template>
    <section
        id="materials"
        class="py-16 md:py-20 bg-white relative overflow-hidden"
    >
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
        <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="text-center mb-16">
                <BaseTag class="reveal mb-6">
                    Материалы
                </BaseTag>
                <h2 class="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6">
                    Мои материалы
                </h2>
                <p class="reveal reveal-delay-2 text-lg text-textLight max-w-2xl mx-auto">
                    Полезные материалы для занятий дома: песни, упражнения и конспекты
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <NuxtLink
                    v-for="(m, i) in materials"
                    :key="m.title"
                    :class="['reveal material-card group cursor-pointer', i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : '']"
                    :to="m.link"
                >
                    <div :class="['rounded-3xl p-6 h-full', m.bg]">
                        <div class="material-icon w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                            <Icon
                                :name="m.icon"
                                :class="['w-7 h-7', m.iconColor]"
                            />
                        </div>
                        <h3 class="font-display text-xl font-semibold text-text mb-2">
                            {{ m.title }}
                        </h3>
                        <p class="text-textLight text-sm mb-4">
                            {{ m.description }}
                        </p>
                        <div :class="['flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all', m.linkColor]">
                            <span>{{ m.action }}</span>
                            <Icon
                                name="lucide:arrow-right"
                                class="w-4 h-4"
                            />
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <div class="reveal mt-12 bg-gradient-to-r from-milk via-white to-milk rounded-3xl p-8 md:p-12">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 class="font-display text-2xl font-semibold text-text mb-4">
                            Бесплатный мини-сборник
                        </h3>
                        <p class="text-textLight mb-6">
                            Получите доступ к мини-сборнику "Смелые шаги в музыкальном развитии" с практическими упражнениями для занятий.
                        </p>
                        <ul class="space-y-3 mb-6">
                            <li
                                v-for="item in courseFeatures"
                                :key="item"
                                class="flex items-center gap-3 text-textLight"
                            >
                                <Icon
                                    name="lucide:check"
                                    class="w-5 h-5 text-sage flex-shrink-0"
                                />
                                {{ item }}
                            </li>
                        </ul>
                        <NuxtLink
                            href="#contact"
                            class="btn-primary inline-flex px-6 py-3 rounded-full text-white font-semibold"
                            @click.prevent="scrollTo('#contact')"
                        >
                            Получить бесплатно
                        </NuxtLink>
                    </div>
                    <div class="relative">
                        <div class="aspect-video rounded-2xl bg-gradient-to-br from-lavender/30 to-sage/30 flex items-center justify-center">
                            <button
                                type="button"
                                class="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
                                aria-label="Воспроизвести видео"
                            >
                                <Icon
                                    name="lucide:play"
                                    class="w-8 h-8 text-accent ml-1"
                                />
                            </button>
                        </div>
                        <div class="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2">
                            <BaseTag
                                variant="white"
                                class="text-sm font-semibold text-text"
                            >
                                Бесплатно
                            </BaseTag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { scrollTo } = useSmoothScroll()

const materials = [
    {
        title: 'Детские песни',
        description: 'Авторские песни для развития речи, слуха и музыкальности',
        bg: 'bg-gradient-to-br from-rose/20 to-blush',
        icon: 'lucide:music',
        iconColor: 'text-accent',
        action: 'Смотреть',
        linkColor: 'text-accent',
        link: '/blog?tags=песни',
    },
    {
        title: 'Упражнения',
        description: 'Рабочие листы с музыкой для развития внимания,концентрации, моторики',
        bg: 'bg-gradient-to-br from-lavender/20 to-sageLight/30',
        icon: 'lucide:clipboard-list',
        iconColor: 'text-lavender',
        action: 'Смотреть',
        linkColor: 'text-lavender',
        link: '/blog?tags=упражнения',
    },
    {
        title: 'Конспекты занятий',
        description: 'Готовые конспекты для педагогов и родителей',
        bg: 'bg-gradient-to-br from-sage/20 to-blush/30',
        icon: 'lucide:book-marked',
        iconColor: 'text-sage',
        action: 'Открыть',
        linkColor: 'text-sage',
        link: '/blog?tags=конспекты',
    },
]

const courseFeatures = ['6 видеоуроков', 'Рабочие материалы', 'Авторская музыка', 'Доступ навсегда']
</script>
