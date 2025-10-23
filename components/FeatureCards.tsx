'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@lib/cn"

const items = [
  {
    title: "Construction Services",
    desc: "From foundations to finishing. We deliver resilient structures across residential, commercial, and industrial sectors with uncompromising quality.",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Project Management",
    desc: "Transparent planning, rigorous quality assurance, and safety-first execution. Every project is delivered on schedule and within budget.",
    icon: "📋",
    image: "https://images.unsplash.com/photo-1504917595217-340dab6ba18b?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Brick Manufacturing",
    desc: "Consistent quality and reliable supply for large-scale developments. Our kiln operates 24/7 to meet Zimbabwe's growing construction demand.",
    icon: "🧱",
    image: "https://images.unsplash.com/photo-1486438322978-b0acf61b9e31?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Vehicles & Equipment Hire",
    desc: "Excavators, graders, dozers, and heavy trucks. Ready for rapid deployment. Well-maintained fleet with expert operators available.",
    icon: "🚜",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1600&auto=format&fit=crop"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function FeatureCards() {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((it, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className={cn("group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevate transition-all duration-300 h-64 sm:h-72")}
        >
          {/* Image */}
          <Image 
            src={it.image} 
            alt={it.title} 
            width={800} 
            height={600} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Icon badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-2xl sm:text-3xl">{it.icon}</div>

          {/* Content - Mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white">
            <div className="text-base sm:text-lg font-bold leading-tight line-clamp-1 text-white drop-shadow-lg">{it.title}</div>
            <p className="text-xs sm:text-sm text-white mt-1 sm:mt-2 line-clamp-1 sm:line-clamp-2 drop-shadow-md">{it.desc}</p>
          </div>

          {/* Hover expand area - Desktop only */}
          <div className="absolute inset-0 bg-brand-primary/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 sm:p-5">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{it.icon}</div>
            <div className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base drop-shadow-md">{it.title}</div>
            <p className="text-white text-xs sm:text-sm leading-relaxed drop-shadow-md">{it.desc}</p>
            <a href="#" className="mt-3 sm:mt-4 text-brand-accent font-semibold text-xs sm:text-sm hover:underline">Learn More →</a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
