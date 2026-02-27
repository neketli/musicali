<template>
    <NuxtImg
        :src="processedSrc"
        :alt="alt"
        :width="width"
        :height="height"
        :format="format"
        :quality="quality"
        loading="lazy"
        placeholder="/img/placeholder.png"
        class="prose-img rounded-lg shadow-md object-cover object-center m-2"
        placeholder-class="animate-pulse"
    />
</template>

<script setup lang="ts">
interface Props {
    src: string
    alt?: string
    width?: number | string
    height?: number | string
    format?: 'webp' | 'avif' | 'jpg' | 'png'
    quality?: number
}

const props = withDefaults(defineProps<Props>(), {
    alt: '',
    format: 'webp',
    quality: 80,
    width: 'auto',
    height: 'auto',
})

const { getUrl } = useS3Files()

const processedSrc = computed(() => {
    if (props.src.startsWith('s3://')) {
        return getUrl(props.src.replace('s3://', ''))
    }

    if (props.src.startsWith('http://') || props.src.startsWith('https://')) {
        return props.src
    }

    return getUrl(props.src)
})
</script>
