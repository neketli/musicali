<script setup lang="ts">
const icons = [
    {
        name: 'mdi:music',
        color: 'text-accent',
    },
    {
        name: 'mdi:microphone',
        color: 'text-lavender',
    },
    {
        name: 'mdi:heart',
        color: 'text-sage',
    },
    {
        name: 'mdi:book-open-variant',
        color: 'text-rose',
    },
]

const features = [
    {
        icon: 'mdi:certificate',
        color: 'bg-accent/20',
        textColor: 'text-accent',
        text: 'Педагогическое образование',
    },
    {
        icon: 'mdi:music-box-multiple',
        color: 'bg-lavender/30',
        textColor: 'text-lavender',
        text: '50+ авторских материалов',
    },
    {
        icon: 'mdi:account-group',
        color: 'bg-sage/30',
        textColor: 'text-sage',
        text: '7000+ довольных педагогов',
    },
    {
        icon: 'mdi:heart',
        color: 'bg-rose/30',
        textColor: 'text-rose',
        text: 'Поддержка и сообщество',
    },
]
</script>

<template>
    <section
        id="about"
        class="py-20 md:py-28 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div class="reveal relative">
                    <div class="relative">
                        <div
                            class="blob absolute inset-0 bg-gradient-to-br from-sage/30 via-blush/30 to-lavender/30 transform -rotate-6" />
                        <div class="relative bg-white p-4 rounded-3xl shadow-lg">
                            <div
                                class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-sageLight to-blush">
                                <div class="w-full h-full flex items-center justify-center p-8">
                                    <div class="grid grid-cols-2 gap-4 w-full">
                                        <div
                                            v-for="(icon, index) in icons"
                                            :key="index"
                                            class="aspect-square rounded-2xl bg-white/60 flex items-center justify-center">
                                            <Icon
                                                :name="icon.name"
                                                :class="`w-12 h-12 ${icon.color}`" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <BaseTag class="reveal mb-6">
                        Обо мне
                    </BaseTag>
                    <h2
                        class="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6">
                        Превращаю занятия в увлекательное путешествие
                    </h2>
                    <div class="reveal reveal-delay-2 space-y-4 text-textLight leading-relaxed">
                        <p>
                            Я - Татьяна Ли, музыкальный педагог, логопед и автор материалов
                            для занятий, которые уже полюбились многим детям!
                        </p>
                        <p>
                            В своей работе я сочетаю музыкальную педагогику и логопедические
                            методики, создавая индивидуальные программы развития для каждого
                            ребенка.
                        </p>
                        <p>
                            Веду свой блог, где делюсь авторскими материалами и жизнью
                            педагога. Ловите новые идеи и видимый результат для ваших детей!
                        </p>
                    </div>
                    <div class="reveal reveal-delay-3 grid grid-cols-2 gap-4 mt-8">
                        <div
                            v-for="(feature, index) in features"
                            :key="index"
                            class="bg-milk rounded-2xl p-4">
                            <div
                                :class="`w-10 h-10 rounded-full ${feature.color} flex items-center justify-center mb-3`">
                                <Icon
                                    :name="feature.icon"
                                    :class="`w-5 h-5 ${feature.textColor}`" />
                            </div>
                            <div class="font-semibold text-text text-sm">
                                {{ feature.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
