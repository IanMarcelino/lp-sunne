import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';

export default function Carrossel() {
  const viewportRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const embla = EmblaCarousel(viewportRef.current, {
      loop: false,
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
    });

    prevRef.current.addEventListener('click', embla.scrollPrev);
    nextRef.current.addEventListener('click', embla.scrollNext);
  }, []);

  return (
    <div className="embla">
      <button className="embla__prev" ref={prevRef}>‹</button>
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          <div className="embla__slide">Card 1</div>
          <div className="embla__slide">Card 2</div>
          <div className="embla__slide">Card 3</div>
        </div>
      </div>
      <button className="embla__next" ref={nextRef}>›</button>
    </div>
  );
}
