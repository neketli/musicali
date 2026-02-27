<template>
    <component
        :is="tag"
        class="base-button inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
        :class="[typeClasses, sizeClasses, shapeClasses, attrs.class]"
        :style="attrs.style"
        :href="tag === 'a' ? href : undefined"
        :disabled="tag === 'button' ? disabled : undefined"
        :type="tag === 'button' ? (nativeType ?? 'button') : undefined"
        v-bind="omitAttrs"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
type ButtonType = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonShape = 'default' | 'rounded'
type ButtonSize = 'sm' | 'md' | 'lg'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<{
        type?: ButtonType
        size?: ButtonSize
        shape?: ButtonShape
        href?: string
        disabled?: boolean
        nativeType?: 'button' | 'submit' | 'reset'
    }>(),
    {
        type: 'primary',
        size: 'md',
        shape: 'default',
        disabled: false,
        nativeType: 'button',
        href: undefined,
    },
)

const attrs = useAttrs()
const omitAttrs = computed(() => {
    const { class: _c, style: _s, ...rest } = attrs
    return rest
})

const tag = computed(() => (props.href ? 'a' : 'button'))

const typeClasses = computed(() => {
    const map: Record<ButtonType, string> = {
        primary: 'bg-gradient-to-br from-rose to-lavender text-white',
        secondary:
      'border-2 border-accent/30 text-text hover:bg-blush/30 bg-transparent',
        ghost:
      'text-textLight hover:text-text transition-colors text-sm font-medium',
        outline:
      'border-2 border-blush text-text hover:bg-blush/30 bg-transparent',
    }
    return map[props.type]
})

const sizeClasses = computed(() => {
    const map: Record<ButtonSize, string> = {
        sm: 'px-2 py-2 text-sm',
        md: 'px-3 py-3 text-base',
        lg: 'px-4 py-4 text-lg',
    }
    return map[props.size]
})

const shapeClasses = computed(() => {
    if (props.shape === 'rounded') {
        return 'rounded-full'
    }
    return 'rounded-md'
})
</script>
