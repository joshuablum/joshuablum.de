import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

let emojiArr = ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿']
let waveEl = document.querySelector('.wave')

waveEl.textContent = emojiArr[Math.floor(Math.random() * emojiArr.length)]

setInterval(() => waveEl.textContent = emojiArr[Math.floor(Math.random() * emojiArr.length)], 2500)

// Konami code