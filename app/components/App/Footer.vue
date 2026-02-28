<template>
    <footer class="bg-text py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div class="md:col-span-2">
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-rose to-lavender flex items-center justify-center">
                            <Icon
                                name="lucide:music"
                                class="w-5 h-5 text-white"
                            />
                        </div>
                        <span class="font-display text-xl font-semibold text-white">Татьяна Ли</span>
                    </div>
                    <p class="text-white/60 max-w-sm">
                        Музыкальный педагог и логопед. Помогаю детям раскрыть свой голос и
                        потенциал через музыку и индивидуальный подход.
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold text-white mb-4">
                        Навигация
                    </h4>
                    <ul class="space-y-2">
                        <li
                            v-for="link in navLinks"
                            :key="link.href"
                        >
                            <NuxtLink
                                :to="link.href"
                                class="text-white/60 hover:text-white transition-colors"
                            >
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-white mb-4">
                        Контакты
                    </h4>
                    <ul class="space-y-2">
                        <li>
                            <a
                                :href="`mailto:${email}`"
                                class="text-white/60 hover:text-white transition-colors"
                            >
                                {{ email }}
                            </a>
                        </li>
                        <li>
                            <a
                                :href="`tel:${phone}`"
                                class="text-white/60 hover:text-white transition-colors"
                            >
                                {{ phoneFormatted }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-white/40 text-sm">
                    {{ new Date().getFullYear() }} Татьяна Ли. Все права защищены.
                </p>
                <div class="flex gap-4">
                    <a
                        :href="telegram.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        :aria-label="telegram.name"
                    >
                        <Icon
                            :name="telegram.icon"
                            class="w-5 h-5 text-white"
                        />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { telegram, email, phoneFormatted, phone } = useContacts()

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
]
</script>
