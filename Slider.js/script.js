let sliders = document.querySelectorAll('.slider')
let dotContainer = document.querySelector('.dots-container')
let nextBtn = document.querySelector('.nav.next')
let prevBtn = document.querySelector('.nav.prev')

let currentIndex = 0
let autoPlayInterval

function showSlider(index) {
    // hapus class active di slider dan dots
    sliders.forEach((slider, i) => {
        slider.classList.remove('active')
        if (dotContainer.children[i]) {
            dotContainer.children[i].classList.remove('active')
        }
    })

    // tampilkan slider dan dot sesuai index
    sliders[index].classList.add('active')
    if (dotContainer.children[index]) {
        dotContainer.children[index].classList.add('active')
    }
}

function nextSlider() {
    currentIndex = (currentIndex + 1) % sliders.length
    showSlider(currentIndex)
}

function prevSlider() {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length
    showSlider(currentIndex)
}

nextBtn.addEventListener('click', () => {
    nextSlider()
    resetAutoPlay()
})

prevBtn.addEventListener('click', () => {
    prevSlider()
    resetAutoPlay()
})

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlider, 5000)
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval)
    startAutoPlay()
}

function createDots() {
    sliders.forEach((_, i) => {
        let dot = document.createElement('span')
        dot.classList.add('dot')
        if (i === currentIndex) dot.classList.add('active')

        dot.addEventListener('click', () => {
            currentIndex = i
            showSlider(currentIndex)
            resetAutoPlay()
        })

        dotContainer.appendChild(dot)
    })
    showSlider(currentIndex)
}

createDots()
startAutoPlay()