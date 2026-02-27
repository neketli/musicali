<template>
    <span
        class="base-tag inline-block px-4 py-2 rounded-full text-sm font-medium"
        :class="[variantClasses]"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
type TagVariant = 'default' | 'blush' | 'white' | 'accent'

const props = withDefaults(
    defineProps<{
        variant?: TagVariant
    }>(),
    {
        variant: 'default',
    },
)

const variantClasses = computed(() => {
    const map: Record<TagVariant, string> = {
        default: 'bg-blush/50 text-textLight',
        blush: 'bg-blush/50 text-textLight',
        white: 'bg-white text-text',
        accent: 'bg-accent text-white',
    }
    return map[props.variant]
})
</script>
