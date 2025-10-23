'use client'
import { motion } from "framer-motion"

export default function StatsStrip() {
  const stats = [
    { label: "Projects Delivered", value: "250+" },
    { label: "Fleet Assets", value: "40+" },
    { label: "On-Time Delivery", value: "98%" },
    { label: "Safety Incidents (12m)", value: "0" },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div 
      className="glass p-6 md:p-8 rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <motion.div 
            key={i} 
            className="text-center space-y-2"
            variants={itemVariants}
          >
            <div className="text-3xl md:text-4xl font-extrabold text-brand-accent tracking-tight">
              {s.value}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-brand-primary/60 font-semibold">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
