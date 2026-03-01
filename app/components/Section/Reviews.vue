<template>
    <section
        id="reviews"
        class="py-20 md:py-24 bg-white relative overflow-hidden"
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
                                    <span class="font-display text-3xl text-white font-semibold">{{ item.name.charAt(0).toUpperCase() }}</span>
                                </div>
                                <div class="flex-1 text-center md:text-left">
                                    <div class="flex justify-center md:justify-start gap-1 mb-4">
                                        <Icon
                                            v-for="(_, starIndex) in 5"
                                            :key="starIndex"
                                            name="line-md:star-alt-filled"
                                            class="w-5 h-5 text-accent"
                                        />
                                    </div>
                                    <p class="text-text leading-relaxed mb-6 text-lg">
                                        "{{ item.quote }}"
                                    </p>
                                    <div class="font-semibold text-text">
                                        {{ item.name }}
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
                            name="lucide:chevron-left"
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
                            name="lucide:chevron-right"
                            class="w-5 h-5 text-text"
                        />
                    </button>
                </div>
            </div>

            <div
                class="reveal mt-16 grid md:grid-cols-4 gap-6"
            >
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
      'Огромная благодарность Татьяне, за такой чудесный материал, она просто Профессионал с большой буквы, и человек с большим сердцем, буду с удовольствием применять на своих воспитанниках!',
        name: 'sayfutdinovaelana',
        bg: 'bg-gradient-to-br from-milk to-blush/30',
        avatarBg: 'bg-gradient-to-br from-rose to-lavender',
    },
    {
        quote:
      'У моего ребенка есть нарушения, нужно работать и над имитацией и над мелкой моторикой....он обожает песенки Татьяны, он все учит, повторяет, хоть и плохо говорит, но мелодию хорошо запоминает. Благодарю от всей души за то, что дарите любовь детям! За ваш труд, за ваш вклад, за вашу любовь к прекрасному',
        name: 'Людмила О',
        bg: 'bg-gradient-to-br from-lavender/20 to-sage/20',
        avatarBg: 'bg-gradient-to-br from-sage to-accent',
    },
    {
        quote:
      'Очень нравятся занятия Татьяны! Жаль, что мы в разных городах, с удовольствием доверила бы ей внука',
        name: 'grinenko736',
        bg: 'bg-gradient-to-br from-rose/20 to-lavender/20',
        avatarBg: 'bg-gradient-to-br from-accent to-rose',
    },
    {
        quote:
      'У меня проблема с музыкальным руководителем, она совершенно ничего не хочет делать, скоро утренник, а у нас даже не было сценария . Хорошо, что я нашла Татьяну, она просто меня спасла! Прекрасные игры и песни!',
        name: 'Татьяна А.',
        bg: 'bg-gradient-to-br from-milk to-blush/30',
        avatarBg: 'bg-gradient-to-br from-rose to-lavender',
    },
    {
        quote:
      'Песенки Татьяны универсальные! Подходят и для деток с особенностями. Музыка и текст легко запоминаются. Клад для меня!',
        name: 've_nera3184',
        bg: 'bg-gradient-to-br from-lavender/20 to-sage/20',
        avatarBg: 'bg-gradient-to-br from-sage to-accent',
    },
    {
        quote:
      `Я сама муз педагог, но фантазии не всегда хватает. 
Татьяна такая молодец ,облегчает многим педагогам жизнь и украшает наши занятия!
И самое главное, её песенки подходят как и для деток постарше, так и для самых маленьких.Я потихоньку внедряю их и в раннее развитие. 
Плюс ещё её песенок в том, что есть сопровождение мелодии, точно не забудешь как поется песня! 
Листы рабочие это просто огонь! 🔥🔥🔥
Очень благодарна ,что есть в бесплатном доступе!`,
        name: 'Анастасия Ч.',
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
    }, 8000)
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
