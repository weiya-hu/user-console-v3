export function addClass(el: HTMLElement, classList: string | string[]) {
  function add(className: string) {
    if (!el.classList.contains(className)) {
      el.classList.add(className)
    }
  }

  if (typeof classList === 'string') {
    add(classList)
  } else {
    classList.forEach((item) => {
      add(item)
    })
  }
}

export function removeClass(el: HTMLElement, classList: string | string[]) {
  function remove(className: string) {
    el.classList.remove(className)
  }

  if (typeof classList === 'string') {
    remove(classList)
  } else {
    classList.forEach((item) => {
      remove(item)
    })
  }
}
