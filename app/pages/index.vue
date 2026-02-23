<template>
    <div class="font-body">
        <AppHeader />
        <main>
            <SectionHero />
            <SectionAbout />
            <SectionServices />
            <SectionMaterials />
            <SectionFormats />
            <SectionReviews />
            <SectionBlog />
            <SectionContact />
        </main>
        <AppFooter />
        <CookieNotification />
    </div>
</template>

<script setup lang="ts">
useScrollReveal()
</script>
