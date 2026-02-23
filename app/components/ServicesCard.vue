<template>
    <div
        v-if="service.cta"
        class="reveal reveal-delay-2 service-card bg-gradient-to-br from-accent/20 via-lavender/20 to-sage/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center"
    >
        <div
            class="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg"
        >
            <Icon
                name="mdi:chat-outline"
                class="w-8 h-8 text-accent" />
        </div>
        <h3 class="font-display text-xl font-semibold text-text mb-3">
            {{ service.title }}
        </h3>
        <p class="text-textLight leading-relaxed mb-6">
            {{ service.description }}
        </p>
        <NuxtLink
            href="#contact"
            class="btn-primary px-6 py-3 rounded-full text-white font-semibold"
            @click.prevent="scrollToContact"
        >
            Записаться
        </NuxtLink>
    </div>
    <div
        v-else
        :class="[
            'reveal service-card bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-blush/20',
            delayClass,
        ]"
    >
        <div
            :class="[
                'w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6',
                service.iconBg,
            ]"
        >
            <Icon
                v-if="service.icon"
                :name="service.icon"
                :class="['w-8 h-8', service.iconColor]"
            />
        </div>
        <h3 class="font-display text-xl font-semibold text-text mb-3">
            {{ service.title }}
        </h3>
        <p class="text-textLight leading-relaxed mb-4">
            {{ service.description }}
        </p>
        <ul class="space-y-2 text-sm text-textLight">
            <li
                v-for="item in service.items"
                :key="item"
                class="flex items-center gap-2"
            >
                <Icon
                    name="mdi:check"
                    class="w-4 h-4 text-sage" />
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { scrollTo } = useSmoothScroll()

defineProps<{
    service: {
        cta?: boolean
        icon?: string
        iconBg?: string
        iconColor?: string
        title: string
        description: string
        items?: string[]
    }
    delayClass?: string
    isCta?: boolean
}>()

function scrollToContact() {
    scrollTo('#contact')
}
</script>
