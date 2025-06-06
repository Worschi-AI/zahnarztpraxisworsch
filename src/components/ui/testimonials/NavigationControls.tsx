
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Testimonial } from "./types"

interface NavigationControlsProps {
  testimonials: Testimonial[]
  activeIndex: number
  onPrev: () => void
  onNext: () => void
  onDotClick: (index: number) => void
}

export function NavigationControls({ 
  testimonials, 
  activeIndex, 
  onPrev, 
  onNext, 
  onDotClick 
}: NavigationControlsProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className="flex md:flex-col gap-4 justify-center mt-8 md:mt-0">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        className="rounded-full h-10 w-10 bg-white/20 border-white/30 text-white hover:bg-white/30"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex md:flex-col gap-2 items-center justify-center">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === activeIndex ? "bg-white" : "bg-white/30",
            )}
            role="button"
            tabIndex={0}
            onClick={() => onDotClick(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onDotClick(index)
              }
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        className="rounded-full h-10 w-10 bg-white/20 border-white/30 text-white hover:bg-white/30"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </motion.div>
  )
}
