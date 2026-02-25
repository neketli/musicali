<template>
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-full opacity-0"
    >
        <div
            v-if="isVisible"
            class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-blush/30 shadow-lg md:bottom-4 md:right-4 md:left-auto md:max-w-md md:rounded-2xl"
        >
            <div class="p-4 md:p-5">
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                            <Icon
                                name="mdi:cookie"
                                class="w-5 h-5 text-accent"
                            />
                        </div>
                    </div>

                    <div class="relative flex-1">
                        <h3 class="font-semibold text-text mb-1">
                            Файлы cookie
                        </h3>
                        <p class="text-sm text-textLight mb-3">
                            Мы используем файлы cookie для улучшения работы сайта. Продолжая использование
                            сайта, вы соглашаетесь с нашей
                            <NuxtLink
                                href="/"
                                target="_blank"
                                class="text-accent hover:underline"
                            >
                                политикой конфиденциальности
                            </NuxtLink>.
                        </p>
                        <BaseButton
                            @click="acceptCookies"
                        >
                            Принять
                        </BaseButton>
                        <button
                            class="absolute top-0 right-2 ml-2 text-sm text-textLight hover:text-text"
                            @click="isVisible = false"
                        >
                            <Icon
                                name="mdi:close"
                                class="w-4 h-4"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const isVisible = ref(false)
const LS_KEY = 'musicali_cookie-consent'

onMounted(() => {
    setTimeout(() => {
        if (localStorage.getItem(LS_KEY) === 'accepted') {
            return
        }
        isVisible.value = true
    }, 1000)
})

const acceptCookies = () => {
    localStorage.setItem(LS_KEY, 'accepted')
    isVisible.value = false
}
</script>
