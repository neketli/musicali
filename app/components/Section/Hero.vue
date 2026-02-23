<template>
    <section
        class="hero relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
        <div class="bg-shape w-96 h-96 bg-rose top-20 -right-48" />
        <div class="bg-shape w-80 h-80 bg-lavender bottom-20 -left-40" />
        <div class="bg-shape w-64 h-64 bg-sage top-1/2 right-1/4" />

        <div
            class="floating-note text-accent text-6xl top-32 left-[10%]"
            style="animation-delay: 0s"
        >
            ♪
        </div>
        <div
            class="floating-note text-lavender text-4xl top-48 right-[15%]"
            style="animation-delay: -2s"
        >
            ♫
        </div>
        <div
            class="floating-note text-sage text-5xl bottom-32 left-[20%]"
            style="animation-delay: -4s"
        >
            ♩
        </div>
        <div
            class="floating-note text-rose text-3xl top-1/3 right-[8%]"
            style="animation-delay: -1s"
        >
            ♬
        </div>
        <div
            class="floating-note text-accent text-4xl bottom-48 right-[25%]"
            style="animation-delay: -3s"
        >
            ♪
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div class="order-2 lg:order-1 text-center lg:text-left">
                    <div class="reveal">
                        <span
                            class="inline-block px-4 py-2 rounded-full bg-blush/50 text-textLight text-sm font-medium mb-6"
                        >
                            Музыкальный педагог и логопед
                        </span>
                    </div>
                    <h1
                        class="reveal reveal-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-text leading-tight mb-6"
                    >
                        Татьяна Ли
                    </h1>
                    <p
                        class="reveal reveal-delay-2 text-lg md:text-xl text-textLight leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                    >
                        Помогаю детям раскрывать себя через музыку. Создаю авторские материалы, которые поддерживают педагогов и родителей - делая занятия вдохновляющими и по-настоящему эффективными
                    </p>
                    <div
                        class="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <NuxtLink
                            href="#materials"
                            class="btn-primary px-8 py-4 rounded-full text-white font-semibold text-center"
                            @click.prevent="scrollTo('#materials')"
                        >
                            Посмотреть материалы
                        </NuxtLink>
                        <NuxtLink
                            href="#contact"
                            class="px-8 py-4 rounded-full border-2 border-accent/30 text-text font-semibold hover:bg-blush/30 transition-colors text-center"
                            @click.prevent="scrollTo('#contact')"
                        >
                            Консультация
                        </NuxtLink>
                    </div>
                </div>

                <div class="order-1 lg:order-2 relative">
                    <div class="reveal relative max-w-md mx-auto lg:max-w-none">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-rose/30 via-lavender/20 to-sage/30 rounded-3xl transform rotate-3 scale-105"
                        />
                        <div class="relative bg-white p-3 rounded-3xl shadow-xl">
                            <div
                                class="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-blush via-milk to-lavender/30"
                            >
                                <div
                                    class="w-full h-full flex items-center justify-center relative"
                                >
                                    <svg
                                        class="absolute inset-0 w-full h-full opacity-10"
                                        viewBox="0 0 400 500"
                                    >
                                        <defs>
                                            <pattern
                                                id="musicPattern"
                                                x="0"
                                                y="0"
                                                width="60"
                                                height="60"
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <circle
                                                    cx="10"
                                                    cy="10"
                                                    r="2"
                                                    fill="#C9A9A0" />
                                                <circle
                                                    cx="50"
                                                    cy="40"
                                                    r="1.5"
                                                    fill="#D4C4E0" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            width="400"
                                            height="500"
                                            fill="url(#musicPattern)" />
                                    </svg>
                                    <div class="text-center z-10">
                                        <div
                                            class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-rose to-lavender flex items-center justify-center mb-4"
                                        >
                                            <Icon
                                                name="mdi:account"
                                                class="w-16 h-16 text-white" />
                                        </div>
                                        <p class="font-display text-2xl text-text/60">
                                            Татьяна Ли
                                        </p>
                                        <p class="text-sm text-textLight/60 mt-1">
                                            Педагог с душой
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3"
                        >
                            <div
                                class="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center"
                            >
                                <Icon
                                    name="mdi:check-circle"
                                    class="w-6 h-6 text-sage-700" />
                            </div>
                            <div>
                                <div class="font-semibold text-text text-sm">
                                    Сертифицированный
                                </div>
                                <div class="text-textLight text-xs">
                                    специалист
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://instagram.com/musicali_teacher"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 hover:scale-105 transition-transform"
                        >
                            <div
                                class="w-12 h-12 rounded-full bg-gradient-to-br from-rose via-lavender to-sage flex items-center justify-center"
                            >
                                <Icon
                                    name="mdi:instagram"
                                    class="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div class="font-semibold text-text text-sm">
                                    @musicali_teacher
                                </div>
                                <div class="text-textLight text-xs">Подписаться</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="wave-divider absolute bottom-0 left-0 right-0">
            <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                    fill="#FFFFFF"
                />
            </svg>
        </div>
    </section>
</template>

<script setup lang="ts">
const { scrollTo } = useSmoothScroll()
</script>

<style scoped>
/* Animated background shapes */
.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  pointer-events: none;
}

/* Floating decorative elements */
.floating-note {
  position: absolute;
  opacity: 0.15;
  animation: float 8s ease-in-out infinite;
  pointer-events: none;
}

.floating-note:nth-child(odd) {
  animation-duration: 10s;
  animation-delay: -2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(5deg);
  }
  50% {
    transform: translateY(-8px) rotate(-3deg);
  }
  75% {
    transform: translateY(-20px) rotate(2deg);
  }
}
</style>
