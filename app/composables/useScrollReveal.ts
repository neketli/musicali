export function useScrollReveal() {
    onMounted(() => {
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        // Use nextTick to ensure DOM is fully rendered
        nextTick(() => {
            const elements = document.querySelectorAll('.reveal')
            elements.forEach((el) => {
                observer.observe(el)
            })
        })

        onUnmounted(() => {
            observer.disconnect()
        })
    })
}
