import EmblaCarousel from 'embla-carousel'

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtn = emblaNode.querySelector('.embla__button--prev')
const nextBtn = emblaNode.querySelector('.embla__button--next')

const embla = EmblaCarousel(viewportNode, { loop: true })

prevBtn.addEventListener('click', () => embla.scrollPrev())
nextBtn.addEventListener('click', () => embla.scrollNext())