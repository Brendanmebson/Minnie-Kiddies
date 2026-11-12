import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { photos, type Photo } from '../data/photos'
import { prefersReducedMotion } from '../hooks/motion'

type Slide = {
  photo: Photo
  eyebrow: string
  title: string
  body: string
  cta: { to: string; label: string }
}

const SLIDES: Slide[] = [
  {
    photo: photos.toysOnFloor,
    eyebrow: 'Nursery to Secondary',
    title: 'Everything on the school list',
    body: 'Bags, shoes, lunch kits and stationery from our shop on Lagos Island.',
    cta: { to: '/shop', label: 'Shop all' },
  },
  {
    photo: photos.childDrawing,
    eyebrow: 'Art & Stationery',
    title: 'Little hands, big ideas',
    body: 'Colouring sets, pencil pouches and maths kits for every class.',
    cta: { to: `/shop?category=${encodeURIComponent('Art & Stationery')}`, label: 'Shop stationery' },
  },
  {
    photo: photos.playgroundSlide,
    eyebrow: 'School Shoes',
    title: 'From first bell to playtime',
    body: 'Comfortable shoes and sneakers that keep up all day.',
    cta: { to: '/shop?category=Shoes', label: 'Shop shoes' },
  },
]

const AUTOPLAY_MS = 6500

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = (step: number) => setIndex((i) => (i + step + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    if (paused || prefersReducedMotion()) return
    const timer = window.setTimeout(() => go(1), AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [index, paused])

  return (
    <section className="wrap hero" aria-roledescription="carousel" aria-label="Featured">
      <h1 className="sr-only">Minnie Kiddies: everything on the school list, from Lagos Island</h1>
      <div
        className="hero-frame"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            className={`hero-slide${i === index ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
            inert={i !== index}
          >
            <img
              src={slide.photo.src}
              width={slide.photo.width}
              height={slide.photo.height}
              alt={slide.photo.alt}
              fetchPriority={i === 0 ? 'high' : undefined}
            />
            <div className="hero-copy">
              <p className="hero-eyebrow">{slide.eyebrow}</p>
              <p className="hero-title">{slide.title}</p>
              <p className="hero-body">{slide.body}</p>
              <Link to={slide.cta.to} className="btn btn-light">{slide.cta.label}</Link>
            </div>
          </div>
        ))}

        <button type="button" className="hero-arrow is-prev" onClick={() => go(-1)} aria-label="Previous slide">
          <FiChevronLeft size={30} strokeWidth={1.25} aria-hidden="true" />
        </button>
        <button type="button" className="hero-arrow is-next" onClick={() => go(1)} aria-label="Next slide">
          <FiChevronRight size={30} strokeWidth={1.25} aria-hidden="true" />
        </button>

        <div className="hero-dots">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${i + 1}: ${slide.title}`}
              aria-current={i === index || undefined}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
