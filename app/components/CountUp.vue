<template>
    <span ref="targetRef">{{ formattedValue }}</span>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
    targetValue: number
    prefix?: string
    suffix?: string
    duration?: number
    startOnView?: boolean
    delay?: number
}

const props = withDefaults(defineProps<Props>(), {
    prefix: '',
    suffix: '',
    duration: 2000,
    startOnView: true,
    delay: 0,
})

const currentValue = ref(0)
const hasAnimated = ref(false)
const targetRef = ref<HTMLElement | null>(null)

const formattedValue = computed(() => {
    const prefix = props.prefix || ''
    const suffix = props.suffix || ''
    return `${prefix}${currentValue.value.toLocaleString('ru-RU')}${suffix}`
})

function easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4)
}

function animateCountUp(): void {
    if (hasAnimated.value) return

    hasAnimated.value = true
    const startTime = performance.now()
    const startValue = 0
    const endValue = props.targetValue

    function update(currentTime: number) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / props.duration, 1)
        const easedProgress = easeOutQuart(progress)

        currentValue.value = Math.floor(startValue + (endValue - startValue) * easedProgress)

        if (progress < 1) {
            requestAnimationFrame(update)
        } else {
            currentValue.value = endValue
        }
    }

    setTimeout(() => {
        requestAnimationFrame(update)
    }, props.delay)
}

if (props.startOnView) {
    useIntersectionObserver(
        targetRef,
        ([entry]) => {
            if (entry?.isIntersecting && !hasAnimated.value) {
                animateCountUp()
            }
        },
        {
            threshold: 0.2,
        },
    )
} else {
    onMounted(() => {
        animateCountUp()
    })
}
</script>
