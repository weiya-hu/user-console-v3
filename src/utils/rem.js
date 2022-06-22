;(function () {
  // 在标准 375px 适配下，100px = 1rem;
  const baseFontSize = 100
  const baseWidth = 375
  const clientW = document.documentElement.clientWidth || window.innerWidth
  const set = function () {
    const clientWidth = document.documentElement.clientWidth || window.innerWidth
    let rem = 100
    if (clientWidth != baseWidth) {
      rem = Math.floor((clientWidth / baseWidth) * baseFontSize)
    }
    if (clientWidth > 750) {
      rem = 200
    }
    document.querySelector('html').style.fontSize = rem + 'px'
  }
  set()
  window.addEventListener('resize', () => {
    if (document.activeElement.attributes.placeholder) {
      document.activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    set()
  })
})()
