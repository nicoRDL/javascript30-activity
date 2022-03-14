const input = document.querySelectorAll('.controls input')

function visualUpdate() {
    const suffix = this.dataset.sizing || ''

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

input.forEach(ins => ins.addEventListener('change', visualUpdate))
input.forEach(ins => ins.addEventListener('mousemove', visualUpdate))