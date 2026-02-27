import type { Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'

export default {
    content: [
        './app/**/*.{vue,js,ts,jsx,tsx}',
        './content/**/*.{md,vue}',
    ],
    theme: {
        extend: {
            colors: {
                cream: '#FDF8F3',
                milk: '#FAF6F1',
                blush: '#F5E1DA',
                rose: '#E8C4BE',
                lavender: '#D4C4E0',
                sage: {
                    DEFAULT: '#B8C9B8',
                    700: '#6B8B6B',
                },
                sageLight: '#D4E0D4',
                warm: '#EDE5DF',
                text: '#4A4A4A',
                textLight: '#6B6B6B',
                accent: '#C9A9A0',
            },
            fontFamily: {
                display: ['Cormorant Garamond', 'serif'],
                body: ['Nunito', 'sans-serif'],
            },
        },
    },
    plugins: [
        typographyPlugin,
    ],
} satisfies Config
