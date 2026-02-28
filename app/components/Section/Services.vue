<template>
    <section
        id="services"
        class="py-16 md:py-20 bg-gradient-to-b from-white via-milk to-white relative overflow-hidden"
    >
        <div class="absolute top-20 left-0 w-64 h-64 bg-rose/20 rounded-full blur-3xl" />
        <div class="absolute bottom-20 right-0 w-80 h-80 bg-lavender/20 rounded-full blur-3xl" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="text-center mb-16">
                <BaseTag class="reveal mb-6">
                    Услуги
                </BaseTag>
                <h2 class="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6">
                    С чем я помогаю
                </h2>
                <p class="reveal reveal-delay-2 text-lg text-textLight max-w-2xl mx-auto">
                    Комплексный подход к развитию вашего ребёнка через музыку и логопедию
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServicesCard
                    v-for="(service, i) in services"
                    :key="service.title"
                    :service="service"
                    :delay-class="delayClasses[i] ?? ''"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const delayClasses: string[] = ['', 'reveal-delay-1', 'reveal-delay-2', '', 'reveal-delay-1']

const services = [
    {
        icon: 'lucide:baby',
        iconBg: 'from-rose/30 to-rose/10',
        iconColor: 'text-accent',
        title: 'Раннее развитие',
        description: 'Развитие детей от 1 года через музыку, игру и сенсорику. Формирование базовых навыков и любви к обучению.',
        items: ['Музыкальные игры', 'Сенсорное развитие', 'Развитие мелкой моторики'],
    },
    {
        icon: 'lucide:mic',
        iconBg: 'from-lavender/30 to-lavender/10',
        iconColor: 'text-lavender',
        title: 'Развитие речи',
        description: 'Логоритмика: запуск речи через движения, коррекция речевых нарушений.',
        items: ['Постановка звуков', 'Артикуляционная гимнастика', 'Развитие словарного запаса'],
    },
    {
        icon: 'lucide:music-2',
        iconBg: 'from-sage/30 to-sage/10',
        iconColor: 'text-sage',
        title: 'Слух и ритм',
        description: 'Развитие музыкального слуха, чувства ритма и вокальных способностей через игровые методики.',
        items: ['Ритмические упражнения', 'Развитие слуха', 'Вокал для детей'],
    },
    {
        icon: 'lucide:lightbulb',
        iconBg: 'from-accent/30 to-accent/10',
        iconColor: 'text-accent',
        title: 'Психические процессы',
        description: 'Развитие внимания, памяти, мышления и воображения через музыкально-игровые занятия.',
        items: ['Тренировка памяти', 'Развитие внимания', 'Креативное мышление'],
    },
    {
        icon: 'lucide:users',
        iconBg: 'from-rose/30 to-rose/10',
        iconColor: 'text-rose',
        title: 'Консультации для педагогов',
        description: 'Методическая помощь педагогам и воспитателям в области музыкального развития детей.',
        items: ['Методические материалы', 'Обучение технологиям', 'Разбор кейсов'],
    },
    {
        cta: true,
        title: 'Не знаете как провести занятие?',
        description: 'Запишитесь на бесплатную консультацию, и я помогу выстроить оптимальную программу.',
    },
]
</script>
