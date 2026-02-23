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
    instagram: SocialLink
    telegram: SocialLink
}

const INSTAGRAM_URL = 'https://instagram.com/musicali_teacher'
const TELEGRAM_URL = 'https://t.me/musicali_teacher'
const EMAIL = 'musicali.teacher@gmail.com'
const PHONE = '+7 (989) 520 88 05'
const PHONE_RAW = '+79895208805'

export function useContacts(): ContactInfo {
    return {
        email: EMAIL,
        phone: PHONE_RAW,
        phoneFormatted: PHONE,
        instagram: {
            name: 'Instagram',
            url: INSTAGRAM_URL,
            icon: 'mdi:instagram',
            label: '@musicali_teacher',
        },
        telegram: {
            name: 'Telegram',
            url: TELEGRAM_URL,
            icon: 'mdi:telegram',
            label: '@musicali_teacher',
        },
    }
}
