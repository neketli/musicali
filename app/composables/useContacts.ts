export interface SocialLink {
    name: string
    url: string
    icon: string
    label: string
}

export interface ContactInfo {
    email: string
    phone: string
    phoneFormatted: string
    telegram: SocialLink
}

const TELEGRAM_URL = 'https://t.me/musicali_teacher'
const EMAIL = 'musicali.teacher@gmail.com'
const PHONE = '+7 (989) 520 88 05'
const PHONE_RAW = '+79895208805'

export function useContacts(): ContactInfo {
    return {
        email: EMAIL,
        phone: PHONE_RAW,
        phoneFormatted: PHONE,
        telegram: {
            name: 'Telegram',
            url: TELEGRAM_URL,
            icon: 'line-md:telegram',
            label: '@musicali_teacher',
        },
    }
}
