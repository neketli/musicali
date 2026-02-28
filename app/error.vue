<template>
    <div class="min-h-screen flex flex-col">
        <Header />

        <main class="flex-grow flex items-center justify-center relative overflow-hidden py-20">
            <!-- Background Shapes -->
            <div class="bg-shape w-96 h-96 bg-rose top-20 -right-48" />
            <div class="bg-shape w-80 h-80 bg-lavender bottom-20 -left-40" />
            <div class="bg-shape w-64 h-64 bg-sage top-1/2 right-1/4" />

            <!-- Floating Musical Notes -->
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

            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center">
                    <div class="reveal mb-8">
                        <div class="relative inline-block">
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-rose/20 via-lavender/20 to-sage/20 rounded-3xl blur-2xl"
                            />
                            <div
                                class="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12"
                            >
                                <div class="staff-lines absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                                    <div
                                        class="staff-line"
                                        style="top: 28%"
                                    />
                                    <div
                                        class="staff-line"
                                        style="top: 38%"
                                    />
                                    <div
                                        class="staff-line"
                                        style="top: 48%"
                                    />
                                    <div
                                        class="staff-line"
                                        style="top: 58%"
                                    />
                                    <div
                                        class="staff-line"
                                        style="top: 68%"
                                    />
                                </div>

                                <div class="relative z-10">
                                    <div class="flex items-center justify-center gap-2 md:gap-4 mb-4">
                                        <span class="error-note text-6xl md:text-8xl font-bold text-accent">4</span>
                                        <div class="musical-decoration text-5xl md:text-7xl text-rose animate-bounce">
                                            ♪
                                        </div>
                                        <span class="error-note text-6xl md:text-8xl font-bold text-lavender">0</span>
                                        <div
                                            class="musical-decoration text-5xl md:text-7xl text-sage animate-bounce"
                                            style="animation-delay: -0.5s"
                                        >
                                            ♫
                                        </div>
                                        <span class="error-note text-6xl md:text-8xl font-bold text-rose">4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p
                        class="reveal reveal-delay-2 text-lg md:text-xl text-text leading-relaxed mb-8 max-w-xl mx-auto"
                    >
                        Ой! Кажется, эта страница ушла в музыкальное путешествие и потерялась в нотах.
                    </p>

                    <NuxtLink
                        href="/"
                        class="reveal reveal-delay-1 inline-flex items-center gap-2 text-sm text-accent font-medium mb-4"
                    >
                        <Icon
                            name="lucide:arrow-left"
                            class="w-4 h-4"
                        />
                        Вернуться на главную
                    </NuxtLink>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
useScrollReveal()
useHead({
    title: 'Ошибка | Musicali',
})
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

/* Musical Staff Lines */
.staff-lines {
    position: absolute;
    width: 100%;
    height: 100%;
}

.staff-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
        transparent,
        rgba(201, 169, 160, 0.3),
        rgba(212, 196, 224, 0.3),
        rgba(184, 201, 184, 0.3),
        transparent
    );
}

/* Error Notes Animation */
.error-note {
    display: inline-block;
    animation: notePulse 3s ease-in-out infinite;
}

.error-note:nth-child(odd) {
    animation-delay: -1s;
}

@keyframes notePulse {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

/* Musical decorations bounce */
.musical-decoration {
    display: inline-block;
    animation: musicalBounce 2s ease-in-out infinite;
}

@keyframes musicalBounce {
    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }
    25% {
        transform: translateY(-10px) rotate(10deg);
    }
    50% {
        transform: translateY(0) rotate(0deg);
    }
    75% {
        transform: translateY(-5px) rotate(-5deg);
    }
}
</style>
