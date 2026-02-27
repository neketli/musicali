<template>
    <BaseButton
        :href="downloadUrl"
        :download="filename"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon
            name="line-md:download-loop"
            class="w-5 h-5"
        />
        <slot>
            {{ buttonText }}
        </slot>
    </BaseButton>
</template>

<script setup lang="ts">
interface Props {
    src: string
    buttonText?: string
    filename?: string
}

const props = withDefaults(defineProps<Props>(), {
    buttonText: 'Скачать',
    filename: `musicali-${new Date().toISOString()}`,
})

const { getUrl } = useS3Files()

const downloadUrl = computed(() => {
    if (props.src.startsWith('s3://')) {
        return getUrl(props.src.replace('s3://', ''))
    }

    if (props.src.startsWith('http://') || props.src.startsWith('https://')) {
        return props.src
    }

    return getUrl(props.src)
})
</script>
