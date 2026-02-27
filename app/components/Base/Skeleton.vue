<template>
    <span
        class="skeleton"
        :class="[
            `skeleton--${variant}`,
            { 'skeleton--animated': animated },
        ]"
        :style="customStyles"
    />
</template>

<script setup lang="ts">
interface Props {
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
    width?: string | number
    height?: string | number
    animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'text',
    animated: true,
})

const customStyles = computed(() => ({
    width: props.width ? typeof props.width === 'number' ? `${props.width}px` : props.width : undefined,
    height: props.height ? typeof props.height === 'number' ? `${props.height}px` : props.height : undefined,
}))
</script>

<style scoped>
.skeleton {
    display: inline-block;
    background-color: #e0e0e0;
}

.skeleton--text {
    height: 1em;
    border-radius: 4px;
}

.skeleton--circular {
    border-radius: 50%;
}

.skeleton--rectangular {
    border-radius: 0;
}

.skeleton--rounded {
    border-radius: 8px;
}

.skeleton--animated {
    position: relative;
    overflow: hidden;
}

.skeleton--animated::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
    );
    transform: translateX(-100%);
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}
</style>
