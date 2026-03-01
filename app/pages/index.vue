<template>
    <div>
        <SectionHero />
        <SectionAbout />
        <SectionServices />
        <SectionMaterials />
        <SectionFormats />
        <SectionReviews />
        <SectionBlog />
        <SectionContact />
    </div>
</template>

<script setup lang="ts">
useScrollReveal()

useHead({
    title: 'Musicali - Музыкальный педагог и логопед Татьяна Ли',
    meta: [
        {
            name: 'yandex-verification',
            content: '00981319b00a4eeb',
        },
    ],
})
</script>
