
"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Quote } from 'lucide-react'
import { Testimonial } from "./types"
import { TestimonialCard } from "./TestimonialCard"
import { NavigationControls } from "./NavigationControls"
import { useTouchSwipe } from "./useTouchSwipe"

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoRotateInterval: number
  itemVariants: any
}

export function TestimonialCarousel({ testimonials, autoRotateInterval, itemVariants }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPaused, setIsAutoPaused] = useState(false)

  // Touch handling for mobile swipe
  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchSwipe({
    onSwipeLeft: () => handleNext(),
    onSwipeRight: () => handlePrev(),
  })

  // Google Maps link for the dental practice
  const googleMapsLink = "https://www.google.com/maps/place/Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch/@51.0258232,13.8338391,17z/data=!3m2!4b1!5s0x4709c7d912ce70c1:0xa0772b1bd9b757d8!4m6!3m5!1s0x4709c7d96d21fce9:0xe0acd2eb962737a1!8m2!3d51.0258232!4d13.836414!16s%2Fg%2F1tgcws99?entry=tts&g_ep=EgoyMDI1MDUxMy4xIPu8ASoASAFQAw%3D%3D&skid=46499da1-bc0b-43d4-92ac-f086733c2af9"

  // Handle card click
  const handleCardClick = () => {
    window.open(googleMapsLink, '_blank')
  }

  // Automatically cycle through testimonials (only when not paused)
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1 || isAutoPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [testimonials.length, autoRotateInterval, isAutoPaused])

  // Handlers for navigation
  const handlePrev = () => {
    setIsAutoPaused(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    
    setTimeout(() => {
      setIsAutoPaused(false)
    }, 10000)
  }

  const handleNext = () => {
    setIsAutoPaused(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    
    setTimeout(() => {
      setIsAutoPaused(false)
    }, 10000)
  }

  return (
    <motion.div variants={itemVariants} className="relative">
      <div className="absolute -top-6 -left-6 z-10">
        <Quote className="h-12 w-12 text-primary/20" strokeWidth={1} />
      </div>

      {/* Testimonial cards */}
      <div 
        className="relative h-[400px] md:h-[380px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isActive={index === activeIndex}
            onClick={handleCardClick}
          />
        ))}
      </div>

      <NavigationControls
        testimonials={testimonials}
        activeIndex={activeIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        onDotClick={setActiveIndex}
      />
    </motion.div>
  )
}
