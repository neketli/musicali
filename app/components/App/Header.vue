<template>
    <header>
        <nav
            class="app-nav fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-blush/30 shadow-sm"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 md:h-20">
                    <NuxtLink
                        href="/"
                        class="flex items-center gap-2"
                        @click="scrollToTop()"
                    >
                        <div
                            class="w-10 h-10 rounded-full bg-gradient-to-br from-rose to-lavender flex items-center justify-center"
                        >
                            <Icon
                                name="mdi:music"
                                class="w-5 h-5 text-white"
                            />
                        </div>
                        <span class="font-display text-xl font-semibold text-text">
                            Musicali
                        </span>
                    </NuxtLink>

                    <div class="hidden md:flex items-center gap-4">
                        <NuxtLink
                            v-for="link in navLinks"
                            :key="link.href"
                            :to="link.href"
                            class="nav-link p-2 text-textLight hover:text-text transition-colors text-sm font-medium"
                            :class="link.class"
                            @click="navWithScroll(link?.anchor)"
                        >
                            {{ link.label }}
                        </NuxtLink>
                    </div>

                    <BaseButton
                        type="secondary"
                        aria-label="Открыть меню"
                        class="md:hidden"
                        @click="mobileOpen = true"
                    >
                        <Icon
                            name="mdi:menu"
                            class="w-6 h-6 text-text"
                        />
                    </BaseButton>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <Transition name="mobile-menu">
            <div
                v-if="mobileOpen"
                class="mobile-menu fixed inset-0 z-50 bg-cream md:hidden"
            >
                <div class="flex flex-col h-full p-6">
                    <div class="flex justify-end items-center mb-12">
                        <BaseButton
                            type="secondary"
                            aria-label="Открыть меню"
                            @click="mobileOpen = false"
                        >
                            <Icon
                                name="mdi:close"
                                class="w-6 h-6 text-text"
                            />
                        </BaseButton>
                    </div>
                    <nav class="flex flex-col gap-6">
                        <NuxtLink
                            v-for="link in navLinks"
                            :key="link.href"
                            :to="link.href"
                            class="text-xl text-text font-medium hover:text-accent transition-colors"
                            :class="link.class"
                            @click="navWithScroll(link?.anchor)"
                        >
                            {{ link.label }}
                        </NuxtLink>
                    </nav>
                    <div class="mt-auto">
                        <div class="flex justify-center gap-4 mt-6">
                            <BaseButton
                                :href="telegram.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="p-3 rounded-full bg-blush hover:bg-rose transition-colors"
                                aria-label="Telegram"
                            >
                                <Icon
                                    name="mdi:telegram"
                                    class="w-5 h-5 text-text"
                                />
                            </BaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
const { scrollTo, scrollToTop } = useSmoothScroll()
const { telegram } = useContacts()

const navLinks = [
    {
        href: '/#about',
        anchor: '#about',
        label: 'Обо мне',
    },
    {
        href: '/#services',
        anchor: '#services',
        label: 'Услуги',
    },
    {
        href: '/#materials',
        anchor: '#materials',
        label: 'Материалы',
    },
    {
        href: '/#reviews',
        anchor: '#reviews',
        label: 'Отзывы',
    },
    {
        href: '/blog',
        label: 'Блог',
    },
    {
        href: '/#contact',
        anchor: '#contact',
        label: 'Связаться',
        class: 'btn-primary px-6 py-3 rounded-full text-white hover:text-white font-semibold text-lg transition-opacity',
    },
]

const mobileOpen = ref(false)

function navWithScroll(hash?: string) {
    mobileOpen.value = false
    if (hash) {
        scrollTo(hash)
    }
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.4s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(100%);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  transform: translateX(0);
}
</style>
