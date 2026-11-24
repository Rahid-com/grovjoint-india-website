
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  '/images/hero/slide-4.png',
  '/images/hero/hero-old.png',
  '/images/hero/slide-1.jpeg',
  '/images/hero/slide-2.png',
  '/images/hero/slide-3.png',
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previous = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section className="hero hero-slider">
      {slides.map((image, index) => (
        <div
          key={image}
          className={`hero-slide ${active === index ? 'active' : ''}`}
          style={{ backgroundImage: `url("${image}")` }}
          aria-hidden={active !== index}
        />
      ))}

      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="eyebrow">
          Ductile iron grooved piping solutions
        </div>

        <h1>
          Connections engineered for <span>confidence.</span>
        </h1>

        <p>
          Grovjoint India Pipe Fittings Pvt Ltd delivers grooved ductile iron
          fittings, couplings and flanges for infrastructure, fire
          protection and building-services piping systems.
        </p>

        <div className="hero-actions">
          <Link className="button" href="/products">
            Explore Products <ArrowUpRight size={16} />
          </Link>

          <Link className="button-outline" href="/request-quote">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="hero-controls">
        <button onClick={previous} aria-label="Previous slide">
          <ChevronLeft size={22} />
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={active === index ? 'active' : ''}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button onClick={next} aria-label="Next slide">
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
