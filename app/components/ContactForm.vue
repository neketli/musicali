<template>
    <Form
        v-slot="{ errors, isSubmitting: formIsSubmitting, setFieldValue }"
        class="bg-gradient-to-br from-milk to-blush/30 rounded-3xl p-8 md:p-10"
        @submit="handleSubmit"
    >
        <div class="space-y-6">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-text mb-2"
                >
                    Ваше имя
                </label>
                <Field
                    id="name"
                    v-slot="{ field }"
                    name="name"
                    type="text"
                    rules="required|min:2"
                    placeholder="Как вас зовут?"
                >
                    <input
                        v-bind="field"
                        :class="[
                            'form-input w-full px-4 py-3 rounded-xl border bg-white focus:outline-none transition-colors',
                            errors.name
                                ? 'border-rose focus:border-rose'
                                : 'border-blush focus:border-accent'
                        ]"
                        placeholder="Как вас зовут?"
                    >
                </Field>
                <span
                    v-if="errors.name"
                    class="text-xs text-rose mt-1"
                >
                    {{ errors.name }}
                </span>
            </div>

            <div>
                <label
                    for="phone"
                    class="block text-sm font-medium text-text mb-2"
                >
                    Телефон
                </label>
                <Field
                    id="phone"
                    v-slot="{ field }"
                    name="phone"
                    type="tel"
                    rules="required|phone"
                    placeholder="+7 (___) ___-__-__"
                    @input="(e: Event) => handlePhoneInput(e, setFieldValue)"
                >
                    <input
                        v-bind="field"
                        :class="[
                            'form-input w-full px-4 py-3 rounded-xl border bg-white focus:outline-none transition-colors',
                            errors.phone
                                ? 'border-rose focus:border-rose'
                                : 'border-blush focus:border-accent'
                        ]"
                        placeholder="+7 (___) ___-__-__"
                    >
                </Field>
                <span
                    v-if="errors.phone"
                    class="text-xs text-rose mt-1"
                >
                    {{ errors.phone }}
                </span>
            </div>

            <div>
                <label
                    for="message"
                    class="block text-sm font-medium text-text mb-2"
                >
                    Сообщение
                </label>
                <Field
                    id="message"
                    v-slot="{ field }"
                    name="message"
                    as="textarea"
                    rows="4"
                    placeholder="Расскажите о вашей ситуации (необязательно)"
                    :class="[
                        'form-input w-full px-4 py-3 rounded-xl border bg-white focus:outline-none resize-none transition-colors',
                        errors.message
                            ? 'border-rose focus:border-rose'
                            : 'border-blush focus:border-accent'
                    ]"
                />
                <span
                    v-if="errors.message"
                    class="text-xs text-rose mt-1"
                >
                    {{ errors.message }}
                </span>
            </div>

            <button
                type="submit"
                class="btn-primary w-full py-4 rounded-full text-white font-semibold text-lg transition-opacity"
                :disabled="isSubmitting || formIsSubmitting"
                :class="{ 'opacity-80 cursor-not-allowed': isSubmitting || formIsSubmitting }"
            >
                <span v-if="isSubmitting || formIsSubmitting">Отправка...</span>
                <span v-else-if="isSubmitted">Заявка отправлена!</span>
                <span v-else>Отправить заявку</span>
            </button>

            <p class="text-xs text-textLight text-center">
                Нажимая кнопку, вы соглашаетесь
                <NuxtLink
                    href="/privacy"
                    class="text-accent hover:underline"
                >
                    с политикой конфиденциальности
                </NuxtLink>.
            </p>
        </div>
    </Form>
</template>

<script setup lang="ts">
import { Form, Field, defineRule } from 'vee-validate'

defineOptions({
    inheritAttrs: false,
})

defineRule('required', (value: unknown): string | boolean => {
    if (!value) {
        return 'Это поле обязательно для заполнения'
    }
    return true
})

defineRule('min', (value: string | unknown[], args: number): string | boolean => {
    if (!value || (typeof value === 'string' && value.length < args)) {
        return `Минимум ${args} символов`
    }
    return true
})

defineRule('phone', (value: string | undefined): string | boolean => {
    if (!value) {
        return 'Введите номер телефона'
    }
    const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/
    return phoneRegex.test(value) || 'Введите корректный номер телефона (например, +7 (999) 123-45-67)'
})

const emit = defineEmits<{
    submit: [values: Record<string, unknown>]
}>()

const isSubmitting = ref(false)
const isSubmitted = ref(false)

function handlePhoneInput(event: Event, setFieldValue: (field: string, value: unknown) => void) {
    const input = event.target as HTMLInputElement
    const digits = input.value.replace(/\D/g, '')

    if (digits.length === 0) {
        setFieldValue('phone', '')
        return
    }

    const cleanDigits = digits[0] === '7' || digits[0] === '8'
        ? digits.slice(1)
        : digits

    let formatted = '+7'
    if (cleanDigits.length > 0) {
        formatted += ` (${cleanDigits.slice(0, 3)}`
    }
    if (cleanDigits.length > 3) {
        formatted += `) ${cleanDigits.slice(3, 6)}`
    }
    if (cleanDigits.length > 6) {
        formatted += `-${cleanDigits.slice(6, 8)}`
    }
    if (cleanDigits.length > 8) {
        formatted += `-${cleanDigits.slice(8, 10)}`
    }

    setFieldValue('phone', formatted)
}

async function handleSubmit(values: Record<string, unknown>, { resetForm }: { resetForm: () => void }) {
    emit('submit', values)
    isSubmitting.value = true
    isSubmitted.value = true
    resetForm()
    isSubmitting.value = false
    setTimeout(() => {
        isSubmitted.value = false
    }, 3000)
}
</script>
