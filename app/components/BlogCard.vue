<template>
    <article class="reveal group cursor-pointer">
        <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div :class="['aspect-video relative overflow-hidden', bg]">
                <div class="absolute inset-0 flex items-center justify-center">
                    <Icon
                        :name="icon"
                        class="w-16 h-16 text-white opacity-80"
                    />
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-display text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                    {{ title }}
                </h3>
                <p class="text-sm text-textLight">
                    {{ excerpt }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    excerpt: string
    bg: string
    icon: string
}>()
</script>
