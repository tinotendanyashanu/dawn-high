import { motion } from "framer-motion"

export default function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <motion.div 
      className="text-center max-w-3xl mx-auto space-y-4 px-4 sm:px-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <div className="accent-dot hidden sm:block" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-primary">
          {title}
        </h2>
        <div className="accent-dot hidden sm:block" />
      </div>
      {subtitle && (
        <p className="subtext text-brand-muted max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
