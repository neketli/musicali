interface ContactFormData {
    name: string
    phone?: string
    message?: string
}

export async function sendTelegramNotification(data: ContactFormData): Promise<void> {
    const botToken = process.env.NUXT_TELEGRAM_BOT_TOKEN
    const chatId = process.env.NUXT_TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
        console.warn('Telegram bot credentials not configured')
        return
    }

    const message = `
📩 *Новое обращение*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
💬 *Сообщение:* ${data.message}
  `.trim()

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`

    try {
        const response = await $fetch(url, {
            method: 'POST',
            body: {
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            },
        })

        console.log('Telegram notification sent:', response)
    } catch (error) {
        console.error('Failed to send Telegram notification:', error)
        throw new Error('Failed to send notification to Telegram')
    }
}
