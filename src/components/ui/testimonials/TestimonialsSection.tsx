
"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { TestimonialsSectionProps } from "./types"
import { TestimonialCarousel } from "./TestimonialCarousel"
import { containerVariants, itemVariants } from "./animations"

export function TestimonialsSection({
  title = "Loved by Developers",
  subtitle = "See what others are saying about our premium starter template",
  testimonials = [],
  autoRotateInterval = 6000,
  showVerifiedBadge = true,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by teams at these companies and more",
  className,
}: TestimonialsSectionProps) {
  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials-alt"
      className={cn("py-16 md:py-32 relative overflow-hidden flex justify-center", className)}
    >
      <div className="container items-center px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12 space-y-4"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            {title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white max-w-[700px] mx-auto md:text-xl/relaxed">
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:grid md:grid-cols-[1fr_auto] gap-8 items-center max-w-[1200px]"
        >
          <TestimonialCarousel 
            testimonials={testimonials}
            autoRotateInterval={autoRotateInterval}
            itemVariants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  )
}
