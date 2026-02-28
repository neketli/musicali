<template>
    <section
        id="contact"
        class="py-20 md:py-28 bg-white relative overflow-hidden"
    >
        <div class="absolute top-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                    <BaseTag class="reveal mb-6">
                        Запись
                    </BaseTag>
                    <h2
                        class="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6"
                    >
                        Запишитесь на консультацию
                    </h2>
                    <p class="reveal reveal-delay-2 text-lg text-textLight mb-8">
                        Оставьте заявку, и я свяжусь с вами для подбора
                        и обсуждения индивидуальной программы.
                    </p>
                    <div class="reveal reveal-delay-3 space-y-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                                <Icon
                                    name="mdi:email-outline"
                                    class="w-6 h-6 text-accent"
                                />
                            </div>
                            <div>
                                <div class="text-sm text-textLight">
                                    Email
                                </div>
                                <a
                                    :href="`mailto:${contacts.email}`"
                                    class="text-text font-medium hover:text-accent transition-colors"
                                >
                                    {{ contacts.email }}
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-2xl bg-sage/20 flex items-center justify-center">
                                <Icon
                                    name="mdi:telegram"
                                    class="w-6 h-6 text-sage"
                                />
                            </div>
                            <div>
                                <div class="text-sm text-textLight">
                                    {{ contacts.telegram.name }}
                                </div>
                                <a
                                    :href="contacts.telegram.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-text font-medium hover:text-accent transition-colors"
                                >
                                    {{ contacts.telegram.label }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactForm
                    class="reveal"
                    @submit="handleSubmit"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const contacts = useContacts()

async function handleSubmit(values: Record<string, unknown>) {
    await useFetch('/api/contact', {
        method: 'post',
        body: values,
    })
}
</script>

<style scoped>
.form-input {
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(201, 169, 160, 0.1);
}
</style>
