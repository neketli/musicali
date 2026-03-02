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
            name: 'google-site-verification',
            content: 'oVqHkcudR18sevZYsVfQtB-zqQzW-fTdWsYKJLT80cM',
        },
    ],
})
</script>
