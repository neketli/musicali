interface ScrollOptions {
    behavior?: ScrollBehavior
    block?: ScrollLogicalPosition
    inline?: ScrollLogicalPosition
    offset?: number
}

export function useSmoothScroll() {
    const defaultOptions: ScrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        offset: 0,
    }

    /**
   * Scrolls to an element specified by selector or element reference
   * @param target - CSS selector string (e.g., '#contact') or HTMLElement
   * @param options - Optional scroll configuration
   */
    function scrollTo(target: string | HTMLElement, options?: ScrollOptions) {
        const mergedOptions = {
            ...defaultOptions,
            ...options,
        }

        let element: HTMLElement | null

        if (typeof target === 'string') {
            element = document.querySelector(target)
        } else {
            element = target
        }

        if (!element) {
            console.warn(`Scroll target not found: ${target}`)
            return
        }

        // Apply offset if specified
        if (mergedOptions.offset) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - mergedOptions.offset

            window.scrollTo({
                top: offsetPosition,
                behavior: mergedOptions.behavior,
            })
        } else {
            element.scrollIntoView({
                behavior: mergedOptions.behavior,
                block: mergedOptions.block,
                inline: mergedOptions.inline,
            })
        }
    }

    /**
   * Scrolls to the top of the page
   * @param options - Optional scroll configuration
   */
    function scrollToTop(options?: Omit<ScrollOptions, 'block' | 'inline'>) {
        const mergedOptions = {
            ...defaultOptions,
            ...options,
        }

        window.scrollTo({
            top: 0,
            behavior: mergedOptions.behavior,
        })
    }

    /**
   * Scrolls to a specific vertical position
   * @param position - Vertical position in pixels
   * @param options - Optional scroll configuration
   */
    function scrollToPosition(position: number, options?: Omit<ScrollOptions, 'block' | 'inline'>) {
        const mergedOptions = {
            ...defaultOptions,
            ...options,
        }

        window.scrollTo({
            top: position,
            behavior: mergedOptions.behavior,
        })
    }

    return {
        scrollTo,
        scrollToTop,
        scrollToPosition,
    }
}
