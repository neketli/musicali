<template>
    <div
        class="inline-flex items-center justify-center rounded-lg bg-sageLight"
        :class="[containerSize]"
    >
        <Icon
            :name="name"
            :class="[
                iconSize,
                colorClass,
            ]"
        />
    </div>
</template>

<script setup lang="ts">
interface Props {
    name: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    color?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    color: 'sage-700',
})

const containerSize = computed(() => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-16 h-16',
        lg: 'w-32 h-32',
        xl: 'w-48 h-48',
    }
    return sizes[props.size]
})

const iconSize = computed(() => {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24',
    }
    return sizes[props.size]
})

const colorClass = computed(() => {
    const colors: Record<string, string> = {
        'sage-700': 'text-sage-700',
        'sage': 'text-sage-700',
        'rose': 'text-rose',
        'lavender': 'text-lavender',
        'accent': 'text-accent',
        'text': 'text-text',
        'white': 'text-white',
    }
    return colors[props.color] || props.color
})
</script>
