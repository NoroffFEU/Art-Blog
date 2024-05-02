const buttons = document.querySelectorAll("[data-carousel-btn]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        //eather goes to previous or next image
        const offset = button.dataset.carouselBtn === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel-container]")
        .querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset//convert them to an array + get index and offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children [newIndex].dataset.active = true
        delete activeSlide.dataset.active 


    })
})

