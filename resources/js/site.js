import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

let emojiArr = ['👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿']
let waveEl = document.querySelector('.wave')

waveEl.innerText = emojiArr[Math.floor(Math.random() * emojiArr.length)]
setInterval(() => waveEl.innerText = emojiArr[Math.floor(Math.random() * emojiArr.length)], 2500)
