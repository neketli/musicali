<template>
    <section class="py-20 md:py-28 bg-gradient-to-b from-white via-blush/20 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <BaseTag
                    variant="white"
                    class="reveal mb-6">
                    Форматы
                </BaseTag>
                <h2 class="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6">
                    Форматы консультаций
                </h2>
                <p class="reveal reveal-delay-2 text-lg text-textLight max-w-2xl mx-auto">
                    Выберите удобный формат
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div
                    v-for="(f, i) in formats"
                    :key="f.title"
                    :class="[
                        'reveal bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border text-center',
                        f.featured ? 'border-2 border-accent/30 shadow-xl relative' : 'border-blush/20',
                        i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : ''
                    ]"
                >
                    <BaseTag
                        v-if="f.featured"
                        variant="accent"
                        class="absolute -top-3 left-1/2 -translate-x-1/2">
                        Популярно
                    </BaseTag>
                    <div :class="['w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6', f.iconBg]">
                        <Icon
                            :name="f.icon"
                            class="w-10 h-10 text-white" />
                    </div>
                    <h3 class="font-display text-xl font-semibold text-text mb-3">
                        {{ f.title }}
                    </h3>
                    <p class="text-textLight mb-6">
                        {{ f.description }}
                    </p>
                    <div class="font-display text-3xl font-semibold text-text mb-2">
                        {{ f.price }}
                    </div>
                    <div
                        v-if="f.period"
                        class="text-sm text-textLight">
                        {{ f.period }}
                    </div>
                    <NuxtLink
                        v-if="f.cta"
                        href="#contact"
                        class="btn-primary mt-6 block py-3 rounded-full text-white font-semibold"
                        @click.prevent="scrollTo('#contact')">
                        Записаться
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { scrollTo } = useSmoothScroll()

const formats = [
    {
        title: 'Материалы',
        description: 'Возможность самостоятельно заниматься с ребёнком по авторским материалам',
        price: '0 ₽',
        iconBg: 'bg-gradient-to-br from-accent to-rose',
        icon: 'mdi:home',
        cta: {
            title: 'Получить',
            href: '#materials',
        },
    },
    {
        title: 'Онлайн',
        description: 'Онлайн консультация в удобное время из любой точки мира',
        price: 'от 1500 ₽',
        period: 'за один час',
        iconBg: 'bg-gradient-to-br from-lavender to-accent',
        icon: 'mdi:video',
        featured: true,
        cta: {
            title: 'Записаться',
            href: '#contact',
        },
    },
    {
        title: 'Абонемент',
        description: 'Выгодный пакет из 8 консультаций с разработкой индивидуального плана',
        price: 'от 10 000 ₽',
        period: 'за 8 консультаций',
        iconBg: 'bg-gradient-to-br from-sage to-lavender',
        icon: 'mdi:book-open-variant',
        cta: {
            title: 'Записаться',
            href: '#contact',
        },
    },
]
</script>
