<template>
    <div class="min-h-screen flex flex-col bg-cream font-body">
        <AppHeader />

        <main class="flex-grow">
            <slot />
        </main>

        <AppFooter />
        <CookieNotification />
    </div>
</template>
