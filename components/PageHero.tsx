import Image from "next/image"
import { motion } from "framer-motion"

export default function PageHero({ title, subtitle, image }: { title: string, subtitle?: string, image: string }) {
  return (
    <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/65" />
      <div className="absolute inset-0 flex items-end">
        <motion.div 
          className="mx-auto max-w-7xl w-full px-6 pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-text text-white leading-tight drop-shadow-lg">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-white max-w-2xl text-lg md:text-xl leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
