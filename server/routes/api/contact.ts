import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(1, 'Поле "Имя" обязательно для заполнения'),
    phone: z.string().optional(),
    message: z.string().optional(),
})

export default defineEventHandler(async (event) => {
    if (event.method !== 'POST') {
        throw createError({
            statusCode: 405,
            message: 'Method not allowed',
        })
    }

    try {
        const body = await readBody(event)
        const validatedData = contactSchema.parse(body)

        await sendTelegramNotification(validatedData)

        return {
            success: true,
            message: 'Your message has been sent successfully!',
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            throw createError({
                statusCode: 400,
                message: 'Ошибка валидации данных',
                data: error,
            })
        }

        console.error('Contact form error:', error)
        throw createError({
            statusCode: 500,
            message: 'Failed to send message. Please try again later.',
        })
    }
})
