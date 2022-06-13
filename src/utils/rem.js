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
    document.activeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    set()
  })
})()

const isIos = () => {
  const m = navigator.userAgent
  const isIos = !!m.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const result = isIos ? true : false
  return result
}
