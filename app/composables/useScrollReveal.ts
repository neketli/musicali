export function useScrollReveal() {
    const route = useRoute()
    let observer: IntersectionObserver | null = null

    const initReveal = () => {
        // Cleanup existing observer first
        if (observer) {
            observer.disconnect()
            observer = null
        }

        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        nextTick(() => {
            const elements = document.querySelectorAll('.reveal')
            elements.forEach((el) => {
                // Immediately activate elements that are already in viewport
                const rect = el.getBoundingClientRect()
                const isVisible = (
                    rect.top >= 0
                    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                )

                if (isVisible) {
                    el.classList.add('active')
                } else {
                    observer?.observe(el)
                }
            })
        })
    }

    onMounted(() => {
        initReveal()
    })

    // Re-init reveal on route change (for SPA navigation)
    watch(() => route.path, () => {
        nextTick(() => {
            // Remove 'active' class from all reveal elements to re-trigger animation
            document.querySelectorAll('.reveal').forEach((el) => {
                el.classList.remove('active')
            })
            initReveal()
        })
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })
}
