<template>
    <section
        id="reviews"
        class="py-20 md:py-28 bg-white relative overflow-hidden"
    >
        <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blush/20 to-transparent" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="text-center mb-16">
                <BaseTag class="reveal mb-6">
                    Отзывы
                </BaseTag>
                <h2 class="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6">
                    Что говорят педагоги
                </h2>
                <p class="reveal reveal-delay-2 text-lg text-textLight max-w-2xl mx-auto">
                    Результаты и отзывы довольных специалистов использующих мои материалы
                </p>
            </div>

            <div class="relative">
                <div
                    ref="sliderRef"
                    class="keen-slider rounded-3xl"
                >
                    <div
                        v-for="(item, index) in reviews"
                        :key="index"
                        class="keen-slider__slide px-4"
                    >
                        <div :class="['rounded-3xl p-8 md:p-12', item.bg]">
                            <div class="flex flex-col md:flex-row gap-8 items-center">
                                <div :class="['w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0', item.avatarBg]">
                                    <span class="font-display text-3xl text-white font-semibold">{{ item.initial }}</span>
                                </div>
                                <div class="flex-1 text-center md:text-left">
                                    <div class="flex justify-center md:justify-start gap-1 mb-4">
                                        <Icon
                                            v-for="(_, starIndex) in 5"
                                            :key="starIndex"
                                            name="mdi:star"
                                            class="w-5 h-5 text-accent"
                                        />
                                    </div>
                                    <p class="text-text leading-relaxed mb-6 text-lg">
                                        "{{ item.quote }}"
                                    </p>
                                    <div>
                                        <div class="font-semibold text-text">
                                            {{ item.name }}
                                        </div>
                                        <div class="text-sm text-textLight">
                                            {{ item.role }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center gap-3 mt-8">
                    <button
                        type="button"
                        class="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blush/30 transition-colors"
                        aria-label="Предыдущий отзыв"
                        @click="handlePrev"
                    >
                        <Icon
                            name="mdi:chevron-left"
                            class="w-5 h-5 text-text"
                        />
                    </button>
                    <div class="flex gap-2 items-center">
                        <button
                            v-for="(_, index) in reviews.length"
                            :key="index"
                            type="button"
                            :class="['w-3 h-3 rounded-full transition-colors', index === currentSlide ? 'bg-accent' : 'bg-blush']"
                            :aria-label="`Отзыв ${index + 1}`"
                            @click="handleGoTo(index)"
                        />
                    </div>
                    <button
                        type="button"
                        class="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blush/30 transition-colors"
                        aria-label="Следующий отзыв"
                        @click="handleNext"
                    >
                        <Icon
                            name="mdi:chevron-right"
                            class="w-5 h-5 text-text"
                        />
                    </button>
                </div>
            </div>

            <div
                class="reveal mt-16 grid md:grid-cols-4 gap-6">
                <div
                    v-for="(stat, index) in stats"
                    :key="stat.label"
                    class="text-center p-6 bg-milk rounded-2xl"
                    :class="`reveal-delay-${index}`"
                >
                    <div class="font-display text-4xl font-semibold text-text mb-2">
                        <CountUp
                            :target-value="stat.targetValue"
                            :prefix="stat.prefix"
                            :suffix="stat.suffix"
                            :duration="2000 + index * 200"
                            :delay="index * 200"
                        />
                    </div>
                    <div class="text-sm text-textLight">
                        {{ stat.label }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue'
import type { KeenSliderOptions } from 'keen-slider/vue'
import 'keen-slider/keen-slider.min.css'

const reviews = [
    {
        quote:
      'Татьяна — невероятный педагог! Мой сын за 3 месяца научился произносить звуки, с которыми мы боролись год. Занятия проходят весело, ребёнок всегда ждёт следующего урока. Рекомендую всем родителям!',
        name: 'Мария К.',
        role: 'Мама Артёма, 5 лет',
        initial: 'М',
        bg: 'bg-gradient-to-br from-milk to-blush/30',
        avatarBg: 'bg-gradient-to-br from-rose to-lavender',
    },
    {
        quote:
      'Дочка занималась с Татьяной онлайн, и я поражена результатами! Через полгода занятий у ребёнка появился абсолютный музыкальный слух, и речь стала гораздо чище. Спасибо за профессионализм!',
        name: 'Анна П.',
        role: 'Мама Софии, 6 лет',
        initial: 'А',
        bg: 'bg-gradient-to-br from-lavender/20 to-sage/20',
        avatarBg: 'bg-gradient-to-br from-sage to-accent',
    },
    {
        quote:
      'Как педагог-воспитатель, я обращалась к Татьяне за консультацией по музыкальному развитию в группе. Получила массу идей и готовых материалов! Теперь наши занятия стали ещё интереснее.',
        name: 'Елена В.',
        role: 'Воспитатель, 15 лет опыта',
        initial: 'Е',
        bg: 'bg-gradient-to-br from-rose/20 to-lavender/20',
        avatarBg: 'bg-gradient-to-br from-accent to-rose',
    },
]

const stats = [
    {
        targetValue: 1000,
        prefix: '> ',
        label: 'Интересующихся педагогов',
    },
    {
        targetValue: 95,
        suffix: '%',
        label: 'Материалов могут быть адаптированы',
    },
    {
        targetValue: 9,
        suffix: '/10',
        label: 'Довольны результатами',
    },
    {
        targetValue: 100,
        suffix: '%',
        label: 'Занятий на развитие речи и слуха',
    },
]

const currentSlide = ref<number>(0)
let autoplayInterval: ReturnType<typeof setInterval> | null = null

const options: KeenSliderOptions = {
    loop: true,
    slides: {
        perView: 1,
        spacing: 16,
    },
    slideChanged: (slider): void => {
        currentSlide.value = slider.track.details.rel
        resetAutoplay()
    },
}

const [sliderRef, sliderInstance] = useKeenSlider(options)

const startAutoplay = (): void => {
    if (autoplayInterval) return
    autoplayInterval = setInterval(() => {
        sliderInstance.value?.next()
    }, 5000)
}

const stopAutoplay = (): void => {
    if (autoplayInterval) {
        clearInterval(autoplayInterval)
        autoplayInterval = null
    }
}

const resetAutoplay = (): void => {
    stopAutoplay()
    startAutoplay()
}

const handleNext = (): void => {
    sliderInstance.value?.next()
}

const handlePrev = (): void => {
    sliderInstance.value?.prev()
}

const handleGoTo = (index: number): void => {
    sliderInstance.value?.moveToIdx(index)
}

onMounted(() => {
    startAutoplay()
})

onUnmounted(() => {
    stopAutoplay()
})
</script>

<style scoped>
.keen-slider {
  overflow: hidden;
}

.keen-slider__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
