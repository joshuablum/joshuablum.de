import Alpine from 'alpinejs'
import confetti, { create } from 'canvas-confetti'
window.Alpine = Alpine

Alpine.store('darkMode', {
    init() {
        this.on = window.matchMedia('(prefers-color-scheme: dark)').matches 
    },
    
    on: false,
    // on: Alpine.$persist(true).as('darkMode_on'),
    
    toggle() {
        this.on = !this.on
    }
})

Alpine.data('wavingEmoji', () => ({
    emoji: ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿'],
    wave() {
        return this.emoji[Math.floor(Math.random() * this.emoji.length)]
    }
}))

Alpine.data('konamiCode', () => ({
    current: 0,
    pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],

    handler(e) {
        if (this.pattern.indexOf(e.key) < 0 || e.key !== this.pattern[this.current]) {
            this.current = 0
            return
        }

        this.current++

        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }

        if (this.pattern.length === this.current) {
            this.current = 0
            confetti()
            delay(1000).then(() => document.body.classList.add('rotate-180'))
        }
    }
}))

Alpine.start()