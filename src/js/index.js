import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons.js'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton.js'

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os carrosseis na página (ex: .embla, .embla-parceiros)
  const carrosseis = document.querySelectorAll('[data-embla]')

  carrosseis.forEach((carrossel) => {
    const viewportNode = carrossel.querySelector('[data-embla-viewport]')
    const prevBtnNode = carrossel.querySelector('[data-embla-prev]')
    const nextBtnNode = carrossel.querySelector('[data-embla-next]')
    const dotsNode = carrossel.querySelector('[data-embla-dots]')

    const emblaApi = window.EmblaCarousel(viewportNode, { loop: true })

    if (prevBtnNode && nextBtnNode) {
      addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode)
    }

    if (dotsNode) {
      addDotBtnsAndClickHandlers(emblaApi, dotsNode)
    }
  })
})