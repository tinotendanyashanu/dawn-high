'use client'
import { motion } from "framer-motion"
import Container from "./Container"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://videos.pexels.com/video-files/856035/856035-uhd_2560_1440_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/70" />
      
      {/* Content */}
      <Container className="relative h-full">
        <motion.div 
          className="h-full flex flex-col justify-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="hero-text leading-tight drop-shadow-lg"
          >
            Building <span className="text-brand-accent">Zimbabwe's</span> Future
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl text-lg md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg leading-relaxed"
          >
            Excellence in construction, innovation in solutions. Delivering residential, commercial, and civil projects on time, on budget, and to spec.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-row gap-2 sm:gap-4 flex-wrap"
          >
            <a 
              href="/projects" 
              className="btn-primary justify-center text-xs sm:text-sm md:text-base py-2 sm:py-3 px-3 sm:px-6 flex-1 min-w-[140px]"
            >
              View Projects
            </a>
            <a 
              href="/fleet" 
              className="inline-flex items-center justify-center px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg bg-brand-accent text-brand-primary font-semibold shadow-elevate hover:brightness-95 active:scale-95 transition-all flex-1 min-w-[130px]"
            >
              Hire Equipment
            </a>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
          >
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent">250+</div>
              <div className="text-xs md:text-sm text-white/70">Projects Delivered</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent">40+</div>
              <div className="text-xs md:text-sm text-white/70">Fleet Assets</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent">98%</div>
              <div className="text-xs md:text-sm text-white/70">On-Time Delivery</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  )
}
