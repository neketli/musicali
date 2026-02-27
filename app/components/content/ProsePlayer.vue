<template>
    <div class="my-6">
        <audio
            controls
            preload="auto"
            class="w-full"
        >
            <source
                :src="audioSrc"
                type="audio/mpeg"
            >
            Ваш браузер не поддерживает элемент <code>audio</code>.
        </audio>
    </div>
</template>

<script setup lang="ts">
interface Props {
    src: string
}

const props = defineProps<Props>()

const { getUrl } = useS3Files()

const audioSrc = computed(() => {
    if (props.src.startsWith('s3://')) {
        return getUrl(props.src.replace('s3://', ''))
    }

    if (props.src.startsWith('http://') || props.src.startsWith('https://')) {
        return props.src
    }

    return getUrl(props.src)
})
</script>
